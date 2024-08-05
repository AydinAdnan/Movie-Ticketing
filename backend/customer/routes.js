const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/date/:moviename", controller.getDate);

router.get("/city", controller.getCity);

router.get("/theatre/:cityname", controller.getTheatre);

router.get("/time/:theatrename,:moviename", controller.getTime);

router.post("/seats", controller.getSeats);

router.post("/seatupdate", controller.updateSeats);

// router.post("/", controller.addCustomer);

// router.get("/:id", controller.getCustomerById);

// router.delete("/:id", controller.deleteCustomerbyId);

// router.put("/:id", controller.updateCustomerbyId);

module.exports = router;
