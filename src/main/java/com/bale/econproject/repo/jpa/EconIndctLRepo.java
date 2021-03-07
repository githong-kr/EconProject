package com.bale.econproject.repo.jpa;

import com.bale.econproject.entity.EconIndctL;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EconIndctLRepo extends CrudRepository<EconIndctL, String> {
    List<EconIndctL> findAllById(String id);

    @Modifying
    @Query("delete from EconIndctL a where a.id = ?1")
    void deleteAllByIndicator( String id );
}
