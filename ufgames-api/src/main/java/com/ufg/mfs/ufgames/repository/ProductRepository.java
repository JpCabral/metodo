package com.ufg.mfs.ufgames.repository;

import com.ufg.mfs.ufgames.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    public List<Product> findAllByOrderByIdAsc();

}
