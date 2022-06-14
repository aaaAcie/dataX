// 用于展示run
export const codeTpl  = (code) => {
  // console.log('aaaaa ',code)

  const theCode = code.replace('parent.document', 'window.disableParent');
  const template = `
  <!DOCTYPE html>
  <html lang="en" class="no-ie" style="overflow:hidden;">
    <head>
      <meta charset="UTF-8">
      <title></title>
      <!-- <script src="static/dist/dist/echarts.min.js"></script> -->
			<script src="static/dist/echarts-5.3.2.min.js"></script>

      <script src="static/static/js/jquery.min.js"></script>
      <script src="static/static/js/FuncTest.js"></script>
      <script src="static/static/js/PortChart.js"></script>
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        @font-face {
          font-family: 'SourceHanSansCN';
          src: url(static/static/font/DIN-Medium.otf);
        }
        #main {
          border: 1px solid #99c8ff;
          background-color: "rgba(3, 16, 38, 1)",
        }
      </style>
    </head>
    <body>
        <div id="main"></div>
        <script>
          
          try {
                                    ${theCode}
                                    // console.log('----window.parent--- ', window.parent)  

                                    let oooo = JSON.parse(JSON.stringify(myChart.getOption()));
                                    window.parent.postMessage({
                                      option: oooo,
                                      beginSize: BeginSize
                                    },'*')

                                    window.addEventListener('message',function(e){
                                      let newOption = event.data.newOption
                                      // console.log('收到父消息：', newOption)
                                      // Object.keys(newOption).forEach((key) => {
                                      //   newOption[key] = JSON.parse(newOption[key])
                                      // })
                                      // console.log('处理后：', newOption)
                                      if(event.data.status=='200'){
                                          console.log(newOption)
                                          myChart.setOption(newOption)
                                      }
                                  })

          } catch(e) {
            console.error(e.name, e.message)
          }
        </script>      
    </body>
  </html>
  `;
  return template;
}

// 用于导出
export const codeTpl0  = (code) => {
  const theCode = code.replace('parent.document', 'window.disableParent');
  const template = `
  <!DOCTYPE html>
  <html lang="en" class="no-ie" style="overflow:hidden;">
    <head>
      <meta charset="UTF-8">
      <title></title>
      <script>
        "object" != typeof ue || "object" != typeof ue.interface ? ("object" != typeof ue && (ue = {}), ue.interface = {},
          ue.interface.broadcast = function(e, t) {
            if ("string" == typeof e) {
              var o = [e, ""];
              void 0 !== t && (o[1] = t);
              var n = encodeURIComponent(JSON.stringify(o));
              "object" == typeof history && "function" == typeof history.pushState ? (history.pushState({}, "",
                "#" + n), history.pushState({}, "", "#" + encodeURIComponent("[]"))) : (document.location
                .hash = n, document.location.hash = encodeURIComponent("[]"))
            }
          }) : function(e) {
          ue.interface = {}, ue.interface.broadcast = function(t, o) {
            "string" == typeof t && (void 0 !== o ? e.broadcast(t, JSON.stringify(o)) : e.broadcast(t, ""))
          }
        }(ue.interface), (ue4 = ue.interface.broadcast);
      </script>
      <!-- <script src="./dist/echarts.min.js"></script> -->
			<script src="./dist/echarts-5.3.2.min.js"></script>
      <script src="./static/js/jquery.min.js"></script>
      <script src="./static/js/FuncTest.js"></script>
      <script src="./static/js/PortChart.js"></script>
      <script>
        $(function() {
          ue4("getSize", {
            mes: "get windows size"
          });
          ue4("getColor", {
            mes: "get all color"
          });
          ue4("getData", {
            mes: "get all data"
          });
          ue4("beginSize", {
            mes: BeginSize[0],
            mes2: BeginSize[1]
          });
          ue4("beginSizeY", {
            mes: BeginSize
          });
        });
        /*$(function () {
            
        });*/
      </script>
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        @font-face {
          font-family: 'SourceHanSansCN';
          src: url(./static/font/DIN-Medium.otf);
        }
      </style>
    </head>
    <body>
        <div id="main"></div>
        <script>
                                    ${theCode}
        </script>      
    </body>
  </html>
  `;
  return template;
}

// 用于可视化导出
export const codeTpl_visual  = (bs, option) => {
  option = JSON.stringify(option)
  console.log('ooooo ',bs, option)
  // const beginSize = bs.replace('parent.document', 'window.disableParent');
  // const theCode = option.replace('parent.document', 'window.disableParent');
  const template = `
  <!DOCTYPE html>
  <html lang="en" class="no-ie" style="overflow:hidden;">
    <head>
      <meta charset="UTF-8">
      <title></title>
      <script>
        "object" != typeof ue || "object" != typeof ue.interface ? ("object" != typeof ue && (ue = {}), ue.interface = {},
          ue.interface.broadcast = function(e, t) {
            if ("string" == typeof e) {
              var o = [e, ""];
              void 0 !== t && (o[1] = t);
              var n = encodeURIComponent(JSON.stringify(o));
              "object" == typeof history && "function" == typeof history.pushState ? (history.pushState({}, "",
                "#" + n), history.pushState({}, "", "#" + encodeURIComponent("[]"))) : (document.location
                .hash = n, document.location.hash = encodeURIComponent("[]"))
            }
          }) : function(e) {
          ue.interface = {}, ue.interface.broadcast = function(t, o) {
            "string" == typeof t && (void 0 !== o ? e.broadcast(t, JSON.stringify(o)) : e.broadcast(t, ""))
          }
        }(ue.interface), (ue4 = ue.interface.broadcast);
      </script>
      <!-- <script src="./dist/echarts.min.js"></script> -->
			<script src="./dist/echarts-5.3.2.min.js"></script>
      <script src="./static/js/jquery.min.js"></script>
      <script src="./static/js/FuncTest.js"></script>
      <script src="./static/js/PortChart.js"></script>
      <script>
        $(function() {
          ue4("getSize", {
            mes: "get windows size"
          });
          ue4("getColor", {
            mes: "get all color"
          });
          ue4("getData", {
            mes: "get all data"
          });
          ue4("beginSize", {
            mes: BeginSize[0],
            mes2: BeginSize[1]
          });
          ue4("beginSizeY", {
            mes: BeginSize
          });
        });
        /*$(function () {
            
        });*/
      </script>
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        @font-face {
          font-family: 'SourceHanSansCN';
          src: url(./static/font/DIN-Medium.otf);
        }
      </style>
    </head>
    <body>
        <div id="main"></div>
        <script>
          let myChart = null
          let BeginSize = [${bs}]
          let newOption = ${option}
          bind()
          function bind() {
            myChart = echarts.init(document.getElementById('main'));
            myChart.setOption(newOption)
          }
          //浏览器测试用
          change(BeginSize[0], BeginSize[1])

          function change(x, y) {
            let div = document.getElementById("main");
            //alert("I am an alert box!!");
            div.style.width = x + "px";
            div.style.height = y + "px";
            var myOption = myChart.getOption();
            myChart.resize();
            let types = []
            myOption.series.forEach((item) => {
              types.push(item.type)
            })
            return types
          }

          /************下面数据***********/
          ue.interface.TransList = function(data) {
            var obj = JSON.parse(data);
            titleData = obj.data1;
            titleData1 = obj.data2;
            dataList = obj.data3;
            dataList1 = obj.data4;
            fresh();
          };
        </script>      
    </body>
  </html>
  `;
  return template;
}