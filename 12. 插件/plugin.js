(
    function(window){
        const MyPlugin = {};
        MyPlugin.install = function (Vue, options) {
            // 1. 添加全局方法或属性
            Vue.myGlobalMethod = function () {
              // 逻辑...
              console.log('myGlobalMethod()')
            }
          
            // 2. 添加全局资源
            Vue.directive('upper-case', function(el,binding){
                el.textContent = binding.value.toUpperCase();
            })
          
            // 3. 注入组件选项
           /*  Vue.mixin({
              created: function () {
                // 逻辑...
              }
              
              
            }) */
          
            // 4. 添加实例方法
            Vue.prototype.$myMethod = function (methodOptions) {
              // 逻辑...
              console.log('$myMethod');

            }
          }
          // 暴露插件对象
          window.MyPlugin = MyPlugin;
    }
)(window)