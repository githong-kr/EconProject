package com.bale.econproject.part.batch.controller;

import com.bale.econproject.entity.EconIndctL;
import com.bale.econproject.part.batch.service.GetDataService;
import com.bale.econproject.repo.jpa.EconIndctLRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.util.ArrayList;

@RestController
@RequestMapping("/")
public class GetDataController {
    @Autowired
    EconIndctLRepo econIndctLRepo;

    @PostMapping("getAllData/{id}")
    @Transactional
    public String getAllData(@PathVariable String id) {

        ArrayList<EconIndctL> econIndctLs = new GetDataService().getAllData( id );

        econIndctLRepo.deleteAllByIndicator( id );

        econIndctLRepo.saveAll(econIndctLs);

        System.out.println("data saving success!");
        return "good";
    }
}
