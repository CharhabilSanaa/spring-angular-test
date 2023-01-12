package lu.atozdigital.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import lu.atozdigital.api.model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long>{
	
	@Query(value = "select u FROM orders ORDER BY id DESC LIMIT 1", nativeQuery = true)
	Order getTheLastOrder();
	
	@Query(value = "SELECT id FROM orders ORDER BY id DESC LIMIT 1", nativeQuery = true)
	long getIdTheLastOrder();

}
