package com.bale.econproject.part.batch.service;

import com.bale.econproject.entity.EconIndctL;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Properties;

@Data
class JsonSubData {
    public String realtime_start;
    public String realtime_end;
    public String date;
    public String value;
}

@Data
class JsonData {
    public String realtime_start;
    public String realtime_end;
    public String observation_start;
    public String observation_end;
    public String units;
    public Integer output_type;
    public String file_type;
    public String order_by;
    public String sort_order;
    public Integer count;
    public Integer offset;
    public Integer limit;
    public ArrayList<JsonSubData> observations;

}

@Service
public class GetDataService {
    public ArrayList<EconIndctL> getAllData(String indicatorId ) {

        Properties localProperties = new Properties();
        try {
            localProperties.load(this.getClass().getResourceAsStream("/local.properties"));
        } catch (IOException e) {
            e.printStackTrace();
        }

        String uri = "https://api.stlouisfed.org/fred/series/observations?series_id=" + indicatorId + "&api_key=" + localProperties.getProperty("FRED_API_KEY").toString() + "&file_type=json";
        ArrayList<EconIndctL> result = new ArrayList<>();
        ObjectMapper mapper = new ObjectMapper();

        JsonData jsonData = null;
        try {
            jsonData = mapper.readValue(new URL(uri), JsonData.class );

            for( JsonSubData observation : jsonData.observations ) {

                if( !".".equals( observation.getValue() ) ) {
                    EconIndctL tmp = new EconIndctL();
                    tmp.setId(indicatorId);
                    tmp.setDate(observation.getDate());
                    tmp.setRate(Double.parseDouble(observation.getValue()));
                    result.add(tmp);
                }
            }

        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;
    }
}
