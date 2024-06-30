import { renderActiveInput } from "./SelectedInput.js";
import { renderActivePlayback } from "./SelectedPlayback.js";

const activeDevices = () => {
  return Widget.Box({
    class_name: "menu-section-container volume",
    vertical: true,
    children: [
      Widget.Box({
        class_name: "menu-label-container volume",
        hpack: "fill",
        child: Widget.Label({
          class_name: "menu-label audio volume",
          hexpand: true,
          hpack: "center",
          label: "Volume",
        }),
      }),
      Widget.Box({
        class_name: "menu-items-section selected",
        vertical: true,
        children: [
          Widget.Box({
            class_name: "menu-active-container playback",
            vertical: true,
            children: renderActivePlayback(),
          }),
          Widget.Box({
            class_name: "menu-active-container input",
            vertical: true,
            children: renderActiveInput(),
          }),
        ],
      }),
    ],
  });
};

export { activeDevices };
