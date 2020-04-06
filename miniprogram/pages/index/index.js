"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var View_1 = require("../../model/View");
var localView = {
    id: View_1.IdGenerator.NextId(),
    classNames: "red",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFrRDtBQUNsRCxJQUFJLFNBQVMsR0FBUztJQUNwQixFQUFFLEVBQUUsa0JBQVcsQ0FBQyxNQUFNLEVBQUU7SUFDeEIsVUFBVSxFQUFFLEtBQUs7SUFDakIsS0FBSyxFQUFFO1FBQ0w7WUFDRSxFQUFFLEVBQUUsa0JBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDeEIsSUFBSSxFQUFFLENBQUM7WUFDUCxHQUFHLEVBQUUsK05BQStOO1NBQ3JPO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsa0JBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDeEIsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxrQkFBa0I7U0FDMUI7UUFDRDtZQUNFLEVBQUUsRUFBRSxrQkFBVyxDQUFDLE1BQU0sRUFBRTtZQUN4QixJQUFJLEVBQUUsQ0FBQztZQUNQLElBQUksRUFBRTtnQkFDSixFQUFFLEVBQUUsa0JBQVcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hCLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxVQUFVLEVBQUUsT0FBTzt3QkFDbkIsSUFBSSxFQUFFLENBQUM7d0JBQ1AsSUFBSSxFQUFFLE9BQU87d0JBQ2IsS0FBSyxFQUFFLGtCQUFrQjt3QkFDekIsRUFBRSxFQUFFLGtCQUFXLENBQUMsTUFBTSxFQUFFO3FCQUN6QjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUE7QUFDRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsU0FBUztLQUNoQjtJQUNELE1BQU07SUFDTixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3LCBJZEdlbmVyYXRvcn0gZnJvbSBcIi4uLy4uL21vZGVsL1ZpZXdcIlxyXG52YXIgbG9jYWxWaWV3OiBWaWV3ID0ge1xyXG4gIGlkOiBJZEdlbmVyYXRvci5OZXh0SWQoKSxcclxuICBjbGFzc05hbWVzOiBcInJlZFwiLFxyXG4gIG5vZGVzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiBJZEdlbmVyYXRvci5OZXh0SWQoKSxcclxuICAgICAgdHlwZTogMSxcclxuICAgICAgc3JjOiBcImh0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTU4NjA5NzY1NTA2NCZkaT04NmM0MWRiODM5N2Q2NzFkNTFkMjk2ZGYwY2JlMzcxMyZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZiLXNzbC5kdWl0YW5nLmNvbSUyRnVwbG9hZHMlMkZpdGVtJTJGMjAxODEyJTJGMjklMkYyMDE4MTIyOTIzMjEwM19LUXdaQy5qcGVnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBJZEdlbmVyYXRvci5OZXh0SWQoKSxcclxuICAgICAgdHlwZTogMixcclxuICAgICAgdGV4dDogXCLmtYvor5XlvIDlj5FcIixcclxuICAgICAgc3R5bGU6IFwiZm9udC1zaXplOjIwcnB4O1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogSWRHZW5lcmF0b3IuTmV4dElkKCksXHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHZpZXc6IHtcclxuICAgICAgICBpZDogSWRHZW5lcmF0b3IuTmV4dElkKCksXHJcbiAgICAgICAgbm9kZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lczogXCJncmVlblwiLFxyXG4gICAgICAgICAgICB0eXBlOiAyLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIua1i+ivleW8gOWPkTJcIixcclxuICAgICAgICAgICAgc3R5bGU6IFwiZm9udC1zaXplOjMwcnB4O1wiLFxyXG4gICAgICAgICAgICBpZDogSWRHZW5lcmF0b3IuTmV4dElkKCksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXVxyXG59XHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIHZpZXc6IGxvY2FsVmlld1xyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gIH1cclxufSlcclxuIl19