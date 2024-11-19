import { CHAT_API_KEY } from "@src/chatConfig/chatConfig";
import { RootState } from "@src/store/store";
import { onMessageChat, onReactionChat } from "@src/utils/chatPrompts";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { StreamChat } from "stream-chat";



function useOnMessageChat() {
    const refTimeOutNewMessage = useRef<NodeJS.Timeout | null>(null);

    const streamStatus = useSelector(
        (state: RootState) => state.chat.isStreamInitialized,
      );

    const chatClient = StreamChat.getInstance(CHAT_API_KEY);
    const user = JSON.parse(useSelector((state: RootState) => state.auth.user));


    function createTimer(callback, timer, ref) {
        if (ref.current) {
            clearTimeout(ref.current);
        }
        ref.current = setTimeout(() => {
            callback();
        }, timer);
    }


    useEffect(() => {
        let unSubscribeList = [];

        (async() => {

            if (streamStatus) {
                const filter = { type: "messaging", members: { $in: [user?.id] } };

                const channels = await chatClient.queryChannels(
                    filter,
                    {},
                    {watch: true},
                );    

                channels.map((channel, index) => {
                const unsubscribeReactionNew = channel.on("reaction.new", async (event) => onReactionChat(event, user));
                const unsubscribeMessageNew = channel.on("message.new", (event) => {

                    //add a delay to avoid multiple notifications
                    createTimer(() => {
                        onMessageChat(event, user, channel);
                    }, 1000, refTimeOutNewMessage);
                });

                unSubscribeList.push(unsubscribeMessageNew);
                unSubscribeList.push(unsubscribeReactionNew);
                })
                
            }
        })()

        return () => {
            unSubscribeList.map((event) => {
                console.log("event", event);
                event.unsubscribe()
            })
        }
      }, [streamStatus, refTimeOutNewMessage.current])
}

export default useOnMessageChat