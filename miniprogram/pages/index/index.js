"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var View_1 = require("../../model/View");
var localView = {
    id: View_1.IdGenerator.NextId(),
    classNames: "red",
    tapCallback: function (_) {
        console.log("top level node clicked");
    },
    nodes: [
        {
            id: View_1.IdGenerator.NextId(),
            type: 1,
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586097655064&di=86c41db8397d671d51d296df0cbe3713&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F29%2F20181229232103_KQwZC.jpeg"
        },
        {
            id: View_1.IdGenerator.NextId(),
            type: 2,
            text: "测试开发",
            style: "font-size:20rpx;"
        },
        {
            id: View_1.IdGenerator.NextId(),
            type: 0,
            view: {
                id: View_1.IdGenerator.NextId(),
                nodes: [
                    {
                        classNames: "green",
                        type: 2,
                        text: "测试开发2",
                        style: "font-size:30rpx;",
                        id: View_1.IdGenerator.NextId(),
                        tapCallback: function (_) {
                            if (this.classNames == "green") {
                                this.classNames = "red";
                            }
                            else {
                                this.classNames = "green";
                            }
                        }
                    }
                ]
            }
        }
    ]
};
Page({
    data: {
        view: localView
    },
    onLoad: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFrRDtBQUVsRCxJQUFJLFNBQVMsR0FBUztJQUNwQixFQUFFLEVBQUUsa0JBQVcsQ0FBQyxNQUFNLEVBQUU7SUFDeEIsVUFBVSxFQUFFLEtBQUs7SUFDakIsV0FBVyxFQUFFLFVBQVMsQ0FBUztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUNELEtBQUssRUFBRTtRQUNMO1lBQ0UsRUFBRSxFQUFFLGtCQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksRUFBRSxDQUFDO1lBQ1AsR0FBRyxFQUFFLCtOQUErTjtTQUNyTztRQUNEO1lBQ0UsRUFBRSxFQUFFLGtCQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsa0JBQWtCO1NBQzFCO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsa0JBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDeEIsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLGtCQUFXLENBQUMsTUFBTSxFQUFFO2dCQUN4QixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsVUFBVSxFQUFFLE9BQU87d0JBQ25CLElBQUksRUFBRSxDQUFDO3dCQUNQLElBQUksRUFBRSxPQUFPO3dCQUNiLEtBQUssRUFBRSxrQkFBa0I7d0JBQ3pCLEVBQUUsRUFBRSxrQkFBVyxDQUFDLE1BQU0sRUFBRTt3QkFDeEIsV0FBVyxFQUFFLFVBQVMsQ0FBVTs0QkFDOUIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBQztnQ0FDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUE7NkJBQ3hCO2lDQUNJO2dDQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFBOzZCQUMxQjt3QkFDSCxDQUFDO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQTtBQUNELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxTQUFTO0tBQ2hCO0lBQ0QsTUFBTTtJQUNOLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXcsIElkR2VuZXJhdG9yfSBmcm9tIFwiLi4vLi4vbW9kZWwvVmlld1wiXHJcbmltcG9ydCB7IE15RXZlbnQgfSBmcm9tIFwiLi4vLi4vbW9kZWwvTXlFdmVudFwiXHJcbnZhciBsb2NhbFZpZXc6IFZpZXcgPSB7XHJcbiAgaWQ6IElkR2VuZXJhdG9yLk5leHRJZCgpLFxyXG4gIGNsYXNzTmFtZXM6IFwicmVkXCIsXHJcbiAgdGFwQ2FsbGJhY2s6IGZ1bmN0aW9uKF86TXlFdmVudCl7XHJcbiAgICBjb25zb2xlLmxvZyhcInRvcCBsZXZlbCBub2RlIGNsaWNrZWRcIilcclxuICB9LFxyXG4gIG5vZGVzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiBJZEdlbmVyYXRvci5OZXh0SWQoKSxcclxuICAgICAgdHlwZTogMSxcclxuICAgICAgc3JjOiBcImh0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTU4NjA5NzY1NTA2NCZkaT04NmM0MWRiODM5N2Q2NzFkNTFkMjk2ZGYwY2JlMzcxMyZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZiLXNzbC5kdWl0YW5nLmNvbSUyRnVwbG9hZHMlMkZpdGVtJTJGMjAxODEyJTJGMjklMkYyMDE4MTIyOTIzMjEwM19LUXdaQy5qcGVnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBJZEdlbmVyYXRvci5OZXh0SWQoKSxcclxuICAgICAgdHlwZTogMixcclxuICAgICAgdGV4dDogXCLmtYvor5XlvIDlj5FcIixcclxuICAgICAgc3R5bGU6IFwiZm9udC1zaXplOjIwcnB4O1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogSWRHZW5lcmF0b3IuTmV4dElkKCksXHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHZpZXc6IHtcclxuICAgICAgICBpZDogSWRHZW5lcmF0b3IuTmV4dElkKCksXHJcbiAgICAgICAgbm9kZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lczogXCJncmVlblwiLFxyXG4gICAgICAgICAgICB0eXBlOiAyLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIua1i+ivleW8gOWPkTJcIixcclxuICAgICAgICAgICAgc3R5bGU6IFwiZm9udC1zaXplOjMwcnB4O1wiLFxyXG4gICAgICAgICAgICBpZDogSWRHZW5lcmF0b3IuTmV4dElkKCksXHJcbiAgICAgICAgICAgIHRhcENhbGxiYWNrOiBmdW5jdGlvbihfOiBNeUV2ZW50KXtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5jbGFzc05hbWVzID09IFwiZ3JlZW5cIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTmFtZXMgPSBcInJlZFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc05hbWVzID0gXCJncmVlblwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXVxyXG59XHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIHZpZXc6IGxvY2FsVmlld1xyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gIH1cclxufSlcclxuIl19