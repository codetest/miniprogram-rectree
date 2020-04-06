"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var View_1 = require("../../model/View");
var localView = {
    id: View_1.IdGenerator.NextId(),
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
        },
        {
            id: View_1.IdGenerator.NextId(),
            type: 0,
            view: {
                id: View_1.IdGenerator.NextId(),
                nodes: [
                    {
                        type: 2,
                        text: "测试开发2",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFrRDtBQUNsRCxJQUFJLFNBQVMsR0FBUztJQUNwQixFQUFFLEVBQUUsa0JBQVcsQ0FBQyxNQUFNLEVBQUU7SUFDeEIsS0FBSyxFQUFFO1FBQ0w7WUFDRSxFQUFFLEVBQUUsa0JBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDeEIsSUFBSSxFQUFFLENBQUM7WUFDUCxHQUFHLEVBQUUsK05BQStOO1NBQ3JPO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsa0JBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDeEIsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUUsTUFBTTtTQUNiO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsa0JBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDeEIsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLGtCQUFXLENBQUMsTUFBTSxFQUFFO2dCQUN4QixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLENBQUM7d0JBQ1AsSUFBSSxFQUFFLE9BQU87d0JBQ2IsRUFBRSxFQUFFLGtCQUFXLENBQUMsTUFBTSxFQUFFO3FCQUN6QjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUE7QUFDRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsU0FBUztLQUNoQjtJQUNELE1BQU07SUFDTixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3LCBJZEdlbmVyYXRvcn0gZnJvbSBcIi4uLy4uL21vZGVsL1ZpZXdcIlxyXG52YXIgbG9jYWxWaWV3OiBWaWV3ID0ge1xyXG4gIGlkOiBJZEdlbmVyYXRvci5OZXh0SWQoKSxcclxuICBub2RlczogW1xyXG4gICAge1xyXG4gICAgICBpZDogSWRHZW5lcmF0b3IuTmV4dElkKCksXHJcbiAgICAgIHR5cGU6IDEsXHJcbiAgICAgIHNyYzogXCJodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1ODYwOTc2NTUwNjQmZGk9ODZjNDFkYjgzOTdkNjcxZDUxZDI5NmRmMGNiZTM3MTMmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGYi1zc2wuZHVpdGFuZy5jb20lMkZ1cGxvYWRzJTJGaXRlbSUyRjIwMTgxMiUyRjI5JTJGMjAxODEyMjkyMzIxMDNfS1F3WkMuanBlZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogSWRHZW5lcmF0b3IuTmV4dElkKCksXHJcbiAgICAgIHR5cGU6IDIsXHJcbiAgICAgIHRleHQ6IFwi5rWL6K+V5byA5Y+RXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogSWRHZW5lcmF0b3IuTmV4dElkKCksXHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHZpZXc6IHtcclxuICAgICAgICBpZDogSWRHZW5lcmF0b3IuTmV4dElkKCksXHJcbiAgICAgICAgbm9kZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogMixcclxuICAgICAgICAgICAgdGV4dDogXCLmtYvor5XlvIDlj5EyXCIsXHJcbiAgICAgICAgICAgIGlkOiBJZEdlbmVyYXRvci5OZXh0SWQoKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBdXHJcbn1cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgdmlldzogbG9jYWxWaWV3XHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgfVxyXG59KVxyXG4iXX0=