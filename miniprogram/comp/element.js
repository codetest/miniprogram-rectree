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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxTQUFTLENBQUM7SUFDTixVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsTUFBTTtLQUNmO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsUUFBUSxFQUFFO1lBQ04sSUFBSSxTQUFTLEdBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDcEQsQ0FBQztRQUNELE9BQU8sRUFBRTtRQUNULENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Vmlld30gZnJvbSBcIi4uL21vZGVsL1ZpZXdcIjtcclxuQ29tcG9uZW50KHtcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB2aWV3OiBPYmplY3RcclxuICAgIH0sXHJcbiAgICBsaWZldGltZXM6IHtcclxuICAgICAgICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBsb2NhbFZpZXc6IFZpZXcgPSA8Vmlldz50aGlzLmRhdGEudmlld1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCBhdHRhY2hlZCBcIiwgbG9jYWxWaWV3LmlkKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG4iXX0=