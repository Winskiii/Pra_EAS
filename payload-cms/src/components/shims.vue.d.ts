// shims-vue.d.ts
declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  
  declare module "vue-router" {
    import { RouteLocationNormalizedLoaded } from "vue-router";
  
    interface RouteMeta {
      // Define your meta properties here
    }
  
    interface RouteMeta {
      // Define your meta properties here
    }
  
    interface RouteLocationNormalizedLoadedCustom extends RouteLocationNormalizedLoaded {
      meta?: RouteMeta;
    }
  
    interface RouteLocation {
      name?: string | null | undefined;
      meta?: RouteMeta;
    }
  }
  