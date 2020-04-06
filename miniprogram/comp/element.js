"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxTQUFTLENBQUM7SUFDTixVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsTUFBTTtLQUNmO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsUUFBUSxFQUFFO1lBQ04sSUFBSSxTQUFTLEdBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDcEQsQ0FBQztRQUNELE9BQU8sRUFBRTtRQUNULENBQUM7S0FDSjtJQUNELE9BQU8sRUFBRTtRQUNMLGNBQWMsRUFBRSxJQUFJO0tBQ3ZCO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3fSBmcm9tIFwiLi4vbW9kZWwvVmlld1wiO1xyXG5Db21wb25lbnQoe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHZpZXc6IE9iamVjdFxyXG4gICAgfSxcclxuICAgIGxpZmV0aW1lczoge1xyXG4gICAgICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGxvY2FsVmlldzogVmlldyA9IDxWaWV3PnRoaXMuZGF0YS52aWV3XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IGF0dGFjaGVkIFwiLCBsb2NhbFZpZXcuaWQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIGFkZEdsb2JhbENsYXNzOiB0cnVlXHJcbiAgICB9XHJcbn0pXHJcbiJdfQ==