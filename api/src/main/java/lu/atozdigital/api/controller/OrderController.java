package lu.atozdigital.api.controller;

import lu.atozdigital.api.model.Order;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lu.atozdigital.api.common.ApiResponse;
import lu.atozdigital.api.exception.OrderNotFoundException;
import lu.atozdigital.api.service.OrderService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/")
public class OrderController {
	
	
    @Autowired
    private OrderService orderService;
    

    // place order after checkout
    @PostMapping("orders/add")
    public ResponseEntity<ApiResponse> placeOrder(){
        // place the order
        orderService.placeOrder();
        return new ResponseEntity<>(new ApiResponse(true, "Order has been placed"), HttpStatus.CREATED);
    }

    // get all orders
    @GetMapping("/orders")
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orderDtoList = orderService.listOrders();
        return new ResponseEntity<>(orderDtoList, HttpStatus.OK);
    }


    // get orderitems for an order
    @GetMapping("orders/{id}")
    public ResponseEntity<Object> getOrderById(@PathVariable("id") Long id){
        try {
            Order order = orderService.getOrder(id);
            return new ResponseEntity<>(order,HttpStatus.OK);
        }
        catch (OrderNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
        }

    }

}