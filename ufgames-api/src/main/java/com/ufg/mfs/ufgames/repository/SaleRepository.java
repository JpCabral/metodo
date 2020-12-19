package com.ufg.mfs.ufgames.repository;

import com.ufg.mfs.ufgames.model.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface SaleRepository extends JpaRepository<Sale, Long> {

    public List<Sale> findAllByOrderByIdAsc();

    @Transactional
    @Modifying
    @Query("DELETE FROM Sale AS s WHERE s.client.id = ?1" )
    public void deleteAllByClient_Id(Long idClient);

    @Transactional
    @Modifying
    @Query("DELETE FROM Sale AS s WHERE s.id IN ( " +
            "SELECT obj.id FROM Sale AS obj JOIN obj.products AS sp WHERE sp.id = ?1)")
    public void deleteAllByIdProduct(Long idProduct);


}
