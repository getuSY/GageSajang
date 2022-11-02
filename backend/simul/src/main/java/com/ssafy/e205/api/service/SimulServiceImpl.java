package com.ssafy.e205.api.service;

/**
 * @brief : Simul Service Impl
 * @details : 요청을 처리하기 위한 service 비즈니스 로직을 구현한 class
 * @date 2022-11-02
 * @author : LDY, 98dlstod@naver.com
 */

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SimulServiceImpl implements SimulService{

//    @Autowired
//    SimulDao dao;

    /** @brief : Simul List, 매출데이터 List 반환
     *  @date : 2022-11-02
     *  @param
     *  @return : List<Integer>
     *  @author : LDY, 98dlstod@naver.com
     */
    @Override
    public List<Integer> salesListforMaybe(String dongName, String industryName){

        String url = "http://127.0.0.1:5000/simulation";


        String paramDongName = "";
        try {
            paramDongName = URLEncoder.encode(dongName, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }

        String paramIndustryName = "";
        try {
            paramIndustryName = URLEncoder.encode(industryName, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }

        url += "?" + "dongName=" + paramDongName + "&industryName=" + paramIndustryName;
        System.out.println("url : " + url);
        String sb = "";

        List<Integer> output = new ArrayList<>();

        try {
            HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "utf-8"));

            String line = null;
            String outputLine = "";
            while ((line = br.readLine()) != null) {
                System.out.println(line);
                outputLine += line;
//                sb = sb + line + "\n";
            }

            outputLine = outputLine.replace("[", "");
            outputLine = outputLine.replace("]", "");
            String[] outputSales = outputLine.split(", ");

            for ( String str : outputSales) {
                output.add((int)Double.parseDouble(str));
            }

//            System.out.println("========br======" + sb.toString());
//            if (sb.toString().contains("ok")) {
//                System.out.println("test");
//
//            }
            br.close();

//            System.out.println("" + sb.toString());
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return output;
    }

}
