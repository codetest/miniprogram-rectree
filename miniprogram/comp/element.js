"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var View_1 = require("../model/View");
Component({
    properties: {
        view: Object
    },
    lifetimes: {
        attached: function () {
            var localView = this.data.view;
            console.log("component attached ", localView.id);
        },
        created: function () {
        }
    },
    options: {
        addGlobalClass: true
    },
    methods: {
        wholeClick: function (myevent) {
            var localView = this.data.view;
            if (localView.tapCallback) {
                localView.tapCallback.apply(localView, [myevent]);
                this.setData({ view: localView });
            }
        },
        click: function (myevent) {
            var localView = this.data.view;
            var id = myevent.target.dataset.nodeid;
            console.log("click node id ", id);
            if (id) {
                var ret = View_1.ViewUtil.FindId(id, localView);
                if (ret && ret.tapCallback) {
                    ret.tapCallback.apply(ret, [myevent]);
                    var localView = this.data.view;
                    this.setData({ view: localView });
                }
            }
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkM7QUFFN0MsU0FBUyxDQUFDO0lBQ04sVUFBVSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07S0FDZjtJQUNELFNBQVMsRUFBRTtRQUNQLFFBQVEsRUFBRTtZQUNOLElBQUksU0FBUyxHQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3BELENBQUM7UUFDRCxPQUFPLEVBQUU7UUFDVCxDQUFDO0tBQ0o7SUFDRCxPQUFPLEVBQUU7UUFDTCxjQUFjLEVBQUUsSUFBSTtLQUN2QjtJQUNELE9BQU8sRUFBRTtRQUNMLFVBQVUsRUFBRSxVQUFTLE9BQWdCO1lBQ2pDLElBQUksU0FBUyxHQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1lBQzFDLElBQUksU0FBUyxDQUFDLFdBQVcsRUFBQztnQkFDdEIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtnQkFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFBO2FBQ2xDO1FBQ0wsQ0FBQztRQUNELEtBQUssRUFBRSxVQUFTLE9BQWdCO1lBQzVCLElBQUksU0FBUyxHQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1lBQzFDLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQTtZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQ2pDLElBQUksRUFBRSxFQUFFO2dCQUNKLElBQUksR0FBRyxHQUFHLGVBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFBO2dCQUN4QyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFDO29CQUN2QixHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO29CQUNyQyxJQUFJLFNBQVMsR0FBZSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtvQkFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFBO2lCQUNsQzthQUNKO1FBQ0wsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3LCBWaWV3VXRpbH0gZnJvbSBcIi4uL21vZGVsL1ZpZXdcIjtcclxuaW1wb3J0IHsgTXlFdmVudCB9IGZyb20gXCIuLi9tb2RlbC9NeUV2ZW50XCI7XHJcbkNvbXBvbmVudCh7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdmlldzogT2JqZWN0XHJcbiAgICB9LFxyXG4gICAgbGlmZXRpbWVzOiB7XHJcbiAgICAgICAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgbG9jYWxWaWV3OiBWaWV3ID0gPFZpZXc+dGhpcy5kYXRhLnZpZXdcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnQgYXR0YWNoZWQgXCIsIGxvY2FsVmlldy5pZClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgYWRkR2xvYmFsQ2xhc3M6IHRydWVcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgd2hvbGVDbGljazogZnVuY3Rpb24obXlldmVudDogTXlFdmVudCkge1xyXG4gICAgICAgICAgICB2YXIgbG9jYWxWaWV3OiBWaWV3ID0gPFZpZXc+dGhpcy5kYXRhLnZpZXdcclxuICAgICAgICAgICAgaWYgKGxvY2FsVmlldy50YXBDYWxsYmFjayl7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFZpZXcudGFwQ2FsbGJhY2suYXBwbHkobG9jYWxWaWV3LCBbbXlldmVudF0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe3ZpZXc6IGxvY2FsVmlld30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbihteWV2ZW50OiBNeUV2ZW50KXtcclxuICAgICAgICAgICAgdmFyIGxvY2FsVmlldzogVmlldyA9IDxWaWV3PnRoaXMuZGF0YS52aWV3XHJcbiAgICAgICAgICAgIHZhciBpZCA9IG15ZXZlbnQudGFyZ2V0LmRhdGFzZXQubm9kZWlkXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgbm9kZSBpZCBcIiwgaWQpXHJcbiAgICAgICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IFZpZXdVdGlsLkZpbmRJZChpZCwgbG9jYWxWaWV3KVxyXG4gICAgICAgICAgICAgICAgaWYgKHJldCAmJiByZXQudGFwQ2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldC50YXBDYWxsYmFjay5hcHBseShyZXQsIFtteWV2ZW50XSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYWxWaWV3OiBWaWV3ID0gPFZpZXc+dGhpcy5kYXRhLnZpZXdcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe3ZpZXc6IGxvY2FsVmlld30pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcbiJdfQ==