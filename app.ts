import { App } from "astal/gtk4"
import style from "./styles/style.scss"
import Bar from "./widgets/Bar"

App.start({
    css: style,
    main() {
        App.get_monitors().map(Bar)
    },
})
