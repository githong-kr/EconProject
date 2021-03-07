package com.bale.econproject.web;

import com.bale.econproject.entity.EconIndctL;
import com.bale.econproject.entity.EconIndctM;
import com.bale.econproject.part.batch.service.GetDataService;
import com.bale.econproject.repo.jpa.EconIndctLRepo;
import com.bale.econproject.repo.jpa.EconIndctMRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/")
public class IndicatorController {

    @Autowired
    EconIndctLRepo econIndctLRepo;

    @Autowired
    EconIndctMRepo econIndctMRepo;

    @GetMapping("economic/indicators/{id}")
    public ModelAndView getIndicator(@PathVariable String id) {

        ModelAndView mv = new ModelAndView();

        List<EconIndctL> qryResult = econIndctLRepo.findAllById(id);
        Optional<EconIndctM> byId = econIndctMRepo.findById(id);

        mv.setViewName("details");

        if( qryResult.size() <= 0 ) {
            EconIndctL econIndctL = new EconIndctL();
            econIndctL.setId(id);
            econIndctL.setDate("1990-01-01");
            econIndctL.setRate(0.0);

            qryResult.add( econIndctL );
        }

        mv.addObject( "details", qryResult );
        mv.addObject( "indicator", id );
        mv.addObject( "title", byId.get().getTitle() );

        return mv;
    }
}
