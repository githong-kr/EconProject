package com.bale.econproject.web;

import com.bale.econproject.entity.EconIndctM;
import com.bale.econproject.repo.jpa.EconIndctMRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/")
public class HomeController {

    @Autowired
    EconIndctMRepo econIndctMRepo;

    @GetMapping
    public ModelAndView home() {

        ModelAndView mv = new ModelAndView();

        List<EconIndctM> qryResult = (List<EconIndctM>) econIndctMRepo.findAll();

        mv.setViewName("index");

        mv.addObject("indicators", qryResult);

        return mv;
    }
}
