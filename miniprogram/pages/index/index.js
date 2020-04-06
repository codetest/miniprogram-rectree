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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFrRDtBQUVsRCxJQUFJLFNBQVMsR0FBUztJQUNwQixFQUFFLEVBQUUsa0JBQVcsQ0FBQyxNQUFNLEVBQUU7SUFDeEIsVUFBVSxFQUFFLEtBQUs7SUFDakIsV0FBVyxFQUFFLFVBQVMsQ0FBUztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUNELEtBQUssRUFBRTtRQUNMO1lBQ0UsRUFBRSxFQUFFLGtCQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksRUFBRSxDQUFDO1lBQ1AsR0FBRyxFQUFFLCtOQUErTjtTQUNyTztRQUNEO1lBQ0UsRUFBRSxFQUFFLGtCQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsa0JBQWtCO1NBQzFCO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsa0JBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDeEIsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLGtCQUFXLENBQUMsTUFBTSxFQUFFO2dCQUN4QixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsVUFBVSxFQUFFLE9BQU87d0JBQ25CLElBQUksRUFBRSxDQUFDO3dCQUNQLElBQUksRUFBRSxPQUFPO3dCQUNiLEtBQUssRUFBRSxrQkFBa0I7d0JBQ3pCLEVBQUUsRUFBRSxrQkFBVyxDQUFDLE1BQU0sRUFBRTt3QkFDeEIsV0FBVyxFQUFFLFVBQVMsQ0FBVTs0QkFDOUIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBQztnQ0FDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUE7NkJBQ3hCO2lDQUNJO2dDQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFBOzZCQUMxQjt3QkFDSCxDQUFDO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQTtBQUNELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxTQUFTO0tBQ2hCO0lBQ0QsTUFBTTtJQUNOLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXcsIElkR2VuZXJhdG9yfSBmcm9tIFwiLi4vLi4vbW9kZWwvVmlld1wiXG5pbXBvcnQgeyBNeUV2ZW50IH0gZnJvbSBcIi4uLy4uL21vZGVsL015RXZlbnRcIlxudmFyIGxvY2FsVmlldzogVmlldyA9IHtcbiAgaWQ6IElkR2VuZXJhdG9yLk5leHRJZCgpLFxuICBjbGFzc05hbWVzOiBcInJlZFwiLFxuICB0YXBDYWxsYmFjazogZnVuY3Rpb24oXzpNeUV2ZW50KXtcbiAgICBjb25zb2xlLmxvZyhcInRvcCBsZXZlbCBub2RlIGNsaWNrZWRcIilcbiAgfSxcbiAgbm9kZXM6IFtcbiAgICB7XG4gICAgICBpZDogSWRHZW5lcmF0b3IuTmV4dElkKCksXG4gICAgICB0eXBlOiAxLFxuICAgICAgc3JjOiBcImh0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTU4NjA5NzY1NTA2NCZkaT04NmM0MWRiODM5N2Q2NzFkNTFkMjk2ZGYwY2JlMzcxMyZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZiLXNzbC5kdWl0YW5nLmNvbSUyRnVwbG9hZHMlMkZpdGVtJTJGMjAxODEyJTJGMjklMkYyMDE4MTIyOTIzMjEwM19LUXdaQy5qcGVnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBJZEdlbmVyYXRvci5OZXh0SWQoKSxcbiAgICAgIHR5cGU6IDIsXG4gICAgICB0ZXh0OiBcIua1i+ivleW8gOWPkVwiLFxuICAgICAgc3R5bGU6IFwiZm9udC1zaXplOjIwcnB4O1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogSWRHZW5lcmF0b3IuTmV4dElkKCksXG4gICAgICB0eXBlOiAwLFxuICAgICAgdmlldzoge1xuICAgICAgICBpZDogSWRHZW5lcmF0b3IuTmV4dElkKCksXG4gICAgICAgIG5vZGVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lczogXCJncmVlblwiLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIHRleHQ6IFwi5rWL6K+V5byA5Y+RMlwiLFxuICAgICAgICAgICAgc3R5bGU6IFwiZm9udC1zaXplOjMwcnB4O1wiLFxuICAgICAgICAgICAgaWQ6IElkR2VuZXJhdG9yLk5leHRJZCgpLFxuICAgICAgICAgICAgdGFwQ2FsbGJhY2s6IGZ1bmN0aW9uKF86IE15RXZlbnQpe1xuICAgICAgICAgICAgICBpZiAodGhpcy5jbGFzc05hbWVzID09IFwiZ3JlZW5cIil7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc05hbWVzID0gXCJyZWRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lcyA9IFwiZ3JlZW5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdXG59XG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHZpZXc6IGxvY2FsVmlld1xuICB9LFxuICBvbkxvYWQoKSB7XG4gIH1cbn0pXG4iXX0=