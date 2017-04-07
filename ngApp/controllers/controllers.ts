namespace myapp.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public cars;

        constructor(carService:myapp.Services.CarService) {
            this.cars = carService.listCars();
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
