/// <reference types="vite/client" />
// 下面这段代码  防止引用文件路径标红  说找不到模块
declare module "*.vue" {
    import { App, defineComponent } from "vue";
    const component: ReturnType<typeof defineComponent> & {
        install(app: App): void;
    };
    export default component;
}