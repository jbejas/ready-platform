import { forwardRef, ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Menu {
  icon: ReactNode;
  label: string;
  onPress: () => void;
}

interface ActionMenuModalProps {
  menus: Menu[];
}

const ActionMenuModal = forwardRef(function ActionMenuModal(
  { menus }: ActionMenuModalProps,
  ref
) {
  const insets = useSafeAreaInsets();

  return (
    <Modalize
      ref={ref}
      adjustToContentHeight={true}
      closeOnOverlayTap={true}
      overlayStyle={{ backgroundColor: "rgba(25, 34, 31, 0.3)" }}
      disableScrollIfPossible={false}
      scrollViewProps={{ showsVerticalScrollIndicator: false }}
      modalStyle={{
        backgroundColor: "transparent",
      }}
    >
      <View
        className="bg-action-sheet-light rounded-t-3xl px-6 pt-8"
        style={{ paddingBottom: insets.bottom + 32 }}
      >
        {menus.map((menu, index) => {
          const addMarginBottom = index !== menus.length - 1 ? "mb-4" : "";
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={menu.onPress}
                className="flex flex-row items-center"
                hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
              >
                {menu.icon}
                <Text className="font-jokkerr ml-2 text-primary-blue-100 text-16 leading-6">
                  {menu.label}
                </Text>
              </TouchableOpacity>
              <View
                className={`h-[1px] w-full mt-4 bg-light-100 ${addMarginBottom}`}
              />
            </View>
          );
        })}
      </View>
    </Modalize>
  );
});

export default ActionMenuModal;
