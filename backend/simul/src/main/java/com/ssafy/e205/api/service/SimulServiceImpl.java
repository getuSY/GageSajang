package com.ssafy.e205.api.service;

/**
 * @brief : Simul Service Impl
 * @details : 요청을 처리하기 위한 service 비즈니스 로직을 구현한 class
 * @date 2022-11-02
 * @author : LDY, 98dlstod@naver.com
 */

import com.ssafy.e205.api.dto.SimulDto;
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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import java.io.*;
import java.net.*;
import java.util.*;

@Service
public class SimulServiceImpl implements SimulService{

//    @Autowired
//    SimulDao dao;

    /** @brief : Simul List, 아마 사장 매출데이터 List 반환
     *  @date : 2022-11-02
     *  @param
     *  @return : List<SimulDto>
     *  @author : LDY, 98dlstod@naver.com
     */
    @Override
    public List<SimulDto> salesListforMaybe(String dongName, String industryName){

        String url = "http://127.0.0.1:5000/simul/sales/maybe";


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

        List<SimulDto> output = new ArrayList<>();

        try {
            HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "utf-8"));

            String line = null;
            String outputLine = "";
            while ((line = br.readLine()) != null) {
                System.out.println(line);
                outputLine += line;
            }

            outputLine = outputLine.replace("[", "");
            outputLine = outputLine.replace("]", "");
            String[] outputSales = outputLine.split(", ");

            int len = outputSales.length;

            int year = 2022;
            int quarter = 4;
            int sales = Integer.parseInt(outputSales[0]);

            SimulDto dto = new SimulDto();
            dto.setYear(year);
            dto.setQuarter(quarter);
            dto.setValue(sales);
            dto.setDongName(dongName);
            dto.setIndustryName(industryName);
            output.add(dto);

            year++;

            for (int i = 1; i < len; i++){
                SimulDto tmp = new SimulDto();;
                tmp.setYear(year);
                tmp.setQuarter(i%4 == 0 ? 4 : i%4);
                tmp.setValue(Integer.parseInt(outputSales[i]));
                tmp.setDongName(dongName);
                tmp.setIndustryName(industryName);

                if(i % 4 == 0) year++;
                output.add(tmp);
            }
            br.close();

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return output;
    }

    /** @brief : Simul List, 아마 사장 생활 인구 데이터 List 반환
     *  @date : 2022-11-04
     *  @param
     *  @return : List<SimulDto>
     *  @author : LDY, 98dlstod@naver.com
     */
    @Override
    public List<SimulDto> lifeListforMaybe(String dongName, String industryName){

        String url = "http://127.0.0.1:5000/simul/life/maybe";


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

        List<SimulDto> output = new ArrayList<>();

        try {
            HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "utf-8"));

            String line = null;
            String outputLine = "";
            while ((line = br.readLine()) != null) {
                System.out.println(line);
                outputLine += line;
            }

            outputLine = outputLine.replace("[", "");
            outputLine = outputLine.replace("]", "");
            String[] outputSales = outputLine.split(", ");

            int len = outputSales.length;

            int year = 2022;
            int quarter = 4;
            int sales = Integer.parseInt(outputSales[0]);

            SimulDto dto = new SimulDto();
            dto.setYear(year);
            dto.setQuarter(quarter);
            dto.setValue(sales);
            dto.setDongName(dongName);
            dto.setIndustryName(industryName);
            output.add(dto);

            year ++;
            for (int i = 1; i < len; i++){
                SimulDto tmp = new SimulDto();;
                tmp.setYear(year);
                tmp.setQuarter(i%4 == 0 ? 4 : i%4);
                tmp.setValue(Integer.parseInt(outputSales[i]));
                tmp.setDongName(dongName);
                tmp.setIndustryName(industryName);

                if(i % 4 == 0) year++;
                output.add(tmp);
            }
            br.close();

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return output;
    }

    /** @brief : Simul List, 아마 사장 거주 인구 데이터 List 반환
     *  @date : 2022-11-04
     *  @param
     *  @return : List<SimulDto>
     *  @author : LDY, 98dlstod@naver.com
     */
    @Override
    public List<SimulDto> residentListforMaybe(String dongName, String industryName){

        String url = "http://127.0.0.1:5000/simul/resident/maybe";


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

        List<SimulDto> output = new ArrayList<>();

        try {
            HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "utf-8"));

            String line = null;
            String outputLine = "";
            while ((line = br.readLine()) != null) {
                System.out.println(line);
                outputLine += line;
            }

            outputLine = outputLine.replace("[", "");
            outputLine = outputLine.replace("]", "");
            String[] outputSales = outputLine.split(", ");

            int len = outputSales.length;

            int year = 2022;
            int quarter = 4;
            int sales = Integer.parseInt(outputSales[0]);

            SimulDto dto = new SimulDto();
            dto.setYear(year);
            dto.setQuarter(quarter);
            dto.setValue(sales);
            dto.setDongName(dongName);
            dto.setIndustryName(industryName);
            output.add(dto);

            year++;

            for (int i = 1; i < len; i++){
                SimulDto tmp = new SimulDto();;
                tmp.setYear(year);
                tmp.setQuarter(i%4 == 0 ? 4 : i%4);
                tmp.setValue(Integer.parseInt(outputSales[i]));
                tmp.setDongName(dongName);
                tmp.setIndustryName(industryName);

                if(i % 4 == 0) year++;
                output.add(tmp);
            }
            br.close();

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return output;
    }

    /** @brief : Simul List, 아마 사장 직장 인구 데이터 List 반환
     *  @date : 2022-11-04
     *  @param
     *  @return : List<SimulDto>
     *  @author : LDY, 98dlstod@naver.com
     */
    @Override
    public List<SimulDto> jobListforMaybe(String dongName, String industryName){

        String url = "http://127.0.0.1:5000/simul/job/maybe";


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

        List<SimulDto> output = new ArrayList<>();

        try {
            HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "utf-8"));

            String line = null;
            String outputLine = "";
            while ((line = br.readLine()) != null) {
                System.out.println(line);
                outputLine += line;
            }

            outputLine = outputLine.replace("[", "");
            outputLine = outputLine.replace("]", "");
            String[] outputSales = outputLine.split(", ");

            int len = outputSales.length;

            int year = 2022;
            int quarter = 4;
            int sales = Integer.parseInt(outputSales[0]);

            SimulDto dto = new SimulDto();
            dto.setYear(year);
            dto.setQuarter(quarter);
            dto.setValue(sales);
            dto.setDongName(dongName);
            dto.setIndustryName(industryName);
            output.add(dto);

            year++;

            for (int i = 1; i < len; i++){
                SimulDto tmp = new SimulDto();;
                tmp.setYear(year);
                tmp.setQuarter(i%4 == 0 ? 4 : i%4);
                tmp.setValue(Integer.parseInt(outputSales[i]));
                tmp.setDongName(dongName);
                tmp.setIndustryName(industryName);

                if(i % 4 == 0) year++;
                output.add(tmp);
            }
            br.close();

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return output;
    }

    /** @brief : Simul List, 아마 사장 매출 거래 건수 데이터 List 반환
     *  @date : 2022-11-04
     *  @param
     *  @return : List<SimulDto>
     *  @author : LDY, 98dlstod@naver.com
     */
    @Override
    public List<SimulDto> countListforMaybe(String dongName, String industryName){

        String url = "http://127.0.0.1:5000/simul/count/maybe";


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

        List<SimulDto> output = new ArrayList<>();

        try {
            HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "utf-8"));

            String line = null;
            String outputLine = "";
            while ((line = br.readLine()) != null) {
                System.out.println(line);
                outputLine += line;
            }

            outputLine = outputLine.replace("[", "");
            outputLine = outputLine.replace("]", "");
            String[] outputSales = outputLine.split(", ");

            int len = outputSales.length;

            int year = 2022;
            int quarter = 4;
            int sales = Integer.parseInt(outputSales[0]);

            SimulDto dto = new SimulDto();
            dto.setYear(year);
            dto.setQuarter(quarter);
            dto.setValue(sales);
            dto.setDongName(dongName);
            dto.setIndustryName(industryName);
            output.add(dto);

            year++;

            for (int i = 1; i < len; i++){
                SimulDto tmp = new SimulDto();;
                tmp.setYear(year);
                tmp.setQuarter(i%4 == 0 ? 4 : i%4);
                tmp.setValue(Integer.parseInt(outputSales[i]));
                tmp.setDongName(dongName);
                tmp.setIndustryName(industryName);

                if(i % 4 == 0) year++;
                output.add(tmp);
            }
            br.close();

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return output;
    }

    /** @brief : Simul List, 이미 사장 매출데이터 List 반환
     *  @date : 2022-11-03
     *  @param
     *  @return : List<SimulDto>
     *  @author : LDY, 98dlstod@naver.com
     */
    @Override
    public List<SimulDto> salesListforAlready_Post(SimulDto simulDto) {
        System.out.println("already");
        String url = "http://127.0.0.1:5000/simul/sales/already";
//
//        try {
//            Url url = new URL("http://127.0.0.1:5000/simul/sales/already");
//        } catch (MalformedURLException e) {
//            throw new RuntimeException(e);
//        }


        Map<String, Object> params = new HashMap<String, Object>();
        params.put("year", simulDto.getYear());
        params.put("quarter", simulDto.getQuarter());
        params.put("value", simulDto.getDongName());
        params.put("industryName", simulDto.getIndustryName());
        params.put("value", simulDto.getValue());

        StringBuilder postData = new StringBuilder();

        try {
            for(Map.Entry<String,Object> param : params.entrySet()) {
                if(postData.length() != 0) postData.append('&');
                postData.append(URLEncoder.encode(param.getKey(), "UTF-8"));
                postData.append('=');
                postData.append(URLEncoder.encode(String.valueOf(param.getValue()), "UTF-8"));
            }

            byte[] postDataBytes = postData.toString().getBytes("UTF-8");

            List<SimulDto> output = new ArrayList<>();

            HttpURLConnection conn = (HttpURLConnection)new URL(url).openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
            conn.setRequestProperty( "charset", "utf-8");
            conn.setRequestProperty("Content-Length", String.valueOf(postDataBytes.length));
            conn.setDoOutput(true);
            conn.getOutputStream().write(postDataBytes); // POST 호출

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));

            String line = null;
            String outputLine = "";

            while ((line = br.readLine()) != null) {
                System.out.println(line);
                outputLine += line;
            }

            outputLine = outputLine.replace("[", "");
            outputLine = outputLine.replace("]", "");
            String[] outputSales = outputLine.split(", ");

            int len = outputSales.length;

            int year = 2013;
            int quarter = 1;

            for (int i = 0; i < len; i++){
                SimulDto tmp = new SimulDto();;
                tmp.setYear(year);
                tmp.setQuarter(i%4 + 1);
                tmp.setValue(Integer.parseInt(outputSales[i]));

                if(i % 4 == 3) year++;
                output.add(tmp);
            }
            br.close();

            return output;

        } catch (Exception e) {
            throw new RuntimeException(e);
        }


    }

    /** @brief : Simul List, 이미 사장 매출 데이터 List 반환
     *  @date : 2022-11-03
     *  @param
     *  @return : List<SimulDto>
     *  @author : LDY, 98dlstod@naver.com
     */
    @Override
    public List<SimulDto> salesListforAlready(SimulDto simulDto) {

        String url = "http://127.0.0.1:5000/simul/sales/already";

        String paramDongName = "";
        String paramIndustryName = "";
        String paramYear = Integer.toString(simulDto.getYear());
        String paramQuarter = Integer.toString(simulDto.getQuarter());
        String paramValue = Integer.toString(simulDto.getValue());

        try {
            paramDongName = URLEncoder.encode(simulDto.getDongName(), "UTF-8");
            paramIndustryName = URLEncoder.encode(simulDto.getIndustryName(), "UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }

        url += "?" + "dongName=" + paramDongName + "&industryName=" + paramIndustryName + "&year=" + paramYear
                + "&quarter=" + paramQuarter + "&value=" + paramValue;
        System.out.println("url : " + url);
        String sb = "";

        List<SimulDto> output = new ArrayList<>();

        try {
            HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "utf-8"));

            String line = null;
            String outputLine = "";
            while ((line = br.readLine()) != null) {
                System.out.println(line);
                outputLine += line;
            }

            outputLine = outputLine.replace("[", "");
            outputLine = outputLine.replace("]", "");
            String[] outputSales = outputLine.split(", ");

            int len = outputSales.length;

            int year = 2013;
            int quarter = 1;
            int sales = Integer.parseInt(outputSales[0]);

            for (int i = 0; i < len; i++){
                SimulDto tmp = new SimulDto();;
                tmp.setYear(year);
                tmp.setQuarter(i%4 + 1);
                tmp.setValue(Integer.parseInt(outputSales[i]));
                tmp.setDongName(simulDto.getDongName());
                tmp.setIndustryName(simulDto.getIndustryName());

                if(i % 4 == 3) year++;
                output.add(tmp);
            }
            br.close();

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return output;
    }

    /** @brief : Simul List, 이미 사장 생활 인구 데이터 List 반환
     *  @date : 2022-11-04
     *  @param
     *  @return : List<SimulDto>
     *  @author : LDY, 98dlstod@naver.com
     */
    @Override
    public List<SimulDto> lifeListforAlready(SimulDto simulDto) {

        String url = "http://127.0.0.1:5000/simul/life/already";

        String paramDongName = "";
        String paramIndustryName = "";
        String paramYear = Integer.toString(simulDto.getYear());
        String paramQuarter = Integer.toString(simulDto.getQuarter());
        String paramValue = Integer.toString(simulDto.getValue());

        try {
            paramDongName = URLEncoder.encode(simulDto.getDongName(), "UTF-8");
            paramIndustryName = URLEncoder.encode(simulDto.getIndustryName(), "UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }

        url += "?" + "dongName=" + paramDongName + "&industryName=" + paramIndustryName + "&year=" + paramYear
                + "&quarter=" + paramQuarter + "&value=" + paramValue;
        System.out.println("url : " + url);
        String sb = "";

        List<SimulDto> output = new ArrayList<>();

        try {
            HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "utf-8"));

            String line = null;
            String outputLine = "";
            while ((line = br.readLine()) != null) {
                System.out.println(line);
                outputLine += line;
            }

            outputLine = outputLine.replace("[", "");
            outputLine = outputLine.replace("]", "");
            String[] outputSales = outputLine.split(", ");

            int len = outputSales.length;

            int year = 2013;
            int quarter = 1;
            int sales = Integer.parseInt(outputSales[0]);

            for (int i = 0; i < len; i++){
                SimulDto tmp = new SimulDto();;
                tmp.setYear(year);
                tmp.setQuarter(i%4 + 1);
                tmp.setValue(Integer.parseInt(outputSales[i]));
                tmp.setDongName(simulDto.getDongName());
                tmp.setIndustryName(simulDto.getIndustryName());

                if(i % 4 == 3) year++;
                output.add(tmp);
            }
            br.close();

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return output;
    }

    /** @brief : Simul List, 이미 사장 거주 인구 데이터 List 반환
     *  @date : 2022-11-04
     *  @param
     *  @return : List<SimulDto>
     *  @author : LDY, 98dlstod@naver.com
     */
    @Override
    public List<SimulDto> residentListforAlready(SimulDto simulDto) {

        String url = "http://127.0.0.1:5000/simul/resident/already";

        String paramDongName = "";
        String paramIndustryName = "";
        String paramYear = Integer.toString(simulDto.getYear());
        String paramQuarter = Integer.toString(simulDto.getQuarter());
        String paramValue = Integer.toString(simulDto.getValue());

        try {
            paramDongName = URLEncoder.encode(simulDto.getDongName(), "UTF-8");
            paramIndustryName = URLEncoder.encode(simulDto.getIndustryName(), "UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }

        url += "?" + "dongName=" + paramDongName + "&industryName=" + paramIndustryName + "&year=" + paramYear
                + "&quarter=" + paramQuarter + "&value=" + paramValue;
        System.out.println("url : " + url);
        String sb = "";

        List<SimulDto> output = new ArrayList<>();

        try {
            HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "utf-8"));

            String line = null;
            String outputLine = "";
            while ((line = br.readLine()) != null) {
                System.out.println(line);
                outputLine += line;
            }

            outputLine = outputLine.replace("[", "");
            outputLine = outputLine.replace("]", "");
            String[] outputSales = outputLine.split(", ");

            int len = outputSales.length;

            int year = 2013;
            int quarter = 1;
            int sales = Integer.parseInt(outputSales[0]);

            for (int i = 0; i < len; i++){
                SimulDto tmp = new SimulDto();;
                tmp.setYear(year);
                tmp.setQuarter(i%4 + 1);
                tmp.setValue(Integer.parseInt(outputSales[i]));
                tmp.setDongName(simulDto.getDongName());
                tmp.setIndustryName(simulDto.getIndustryName());

                if(i % 4 == 3) year++;
                output.add(tmp);
            }
            br.close();

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return output;
    }

    /** @brief : Simul List, 이미 사장 직장 인구 데이터 List 반환
     *  @date : 2022-11-04
     *  @param
     *  @return : List<SimulDto>
     *  @author : LDY, 98dlstod@naver.com
     */
    @Override
    public List<SimulDto> jobListforAlready(SimulDto simulDto) {

        String url = "http://127.0.0.1:5000/simul/job/already";

        String paramDongName = "";
        String paramIndustryName = "";
        String paramYear = Integer.toString(simulDto.getYear());
        String paramQuarter = Integer.toString(simulDto.getQuarter());
        String paramValue = Integer.toString(simulDto.getValue());

        try {
            paramDongName = URLEncoder.encode(simulDto.getDongName(), "UTF-8");
            paramIndustryName = URLEncoder.encode(simulDto.getIndustryName(), "UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }

        url += "?" + "dongName=" + paramDongName + "&industryName=" + paramIndustryName + "&year=" + paramYear
                + "&quarter=" + paramQuarter + "&value=" + paramValue;
        System.out.println("url : " + url);
        String sb = "";

        List<SimulDto> output = new ArrayList<>();

        try {
            HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "utf-8"));

            String line = null;
            String outputLine = "";
            while ((line = br.readLine()) != null) {
                System.out.println(line);
                outputLine += line;
            }

            outputLine = outputLine.replace("[", "");
            outputLine = outputLine.replace("]", "");
            String[] outputSales = outputLine.split(", ");

            int len = outputSales.length;

            int year = 2013;
            int quarter = 1;
            int sales = Integer.parseInt(outputSales[0]);

            for (int i = 0; i < len; i++){
                SimulDto tmp = new SimulDto();;
                tmp.setYear(year);
                tmp.setQuarter(i%4 + 1);
                tmp.setValue(Integer.parseInt(outputSales[i]));
                tmp.setDongName(simulDto.getDongName());
                tmp.setIndustryName(simulDto.getIndustryName());

                if(i % 4 == 3) year++;
                output.add(tmp);
            }
            br.close();

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return output;
    }

    /** @brief : Simul List, 이미 사장 매출 거래 건수 데이터 List 반환
     *  @date : 2022-11-04
     *  @param
     *  @return : List<SimulDto>
     *  @author : LDY, 98dlstod@naver.com
     */
    @Override
    public List<SimulDto> countListforAlready(SimulDto simulDto) {

        String url = "http://127.0.0.1:5000/simul/job/already";

        String paramDongName = "";
        String paramIndustryName = "";
        String paramYear = Integer.toString(simulDto.getYear());
        String paramQuarter = Integer.toString(simulDto.getQuarter());
        String paramValue = Integer.toString(simulDto.getValue());

        try {
            paramDongName = URLEncoder.encode(simulDto.getDongName(), "UTF-8");
            paramIndustryName = URLEncoder.encode(simulDto.getIndustryName(), "UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }

        url += "?" + "dongName=" + paramDongName + "&industryName=" + paramIndustryName + "&year=" + paramYear
                + "&quarter=" + paramQuarter + "&value=" + paramValue;
        System.out.println("url : " + url);
        String sb = "";

        List<SimulDto> output = new ArrayList<>();

        try {
            HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "utf-8"));

            String line = null;
            String outputLine = "";
            while ((line = br.readLine()) != null) {
                System.out.println(line);
                outputLine += line;
            }

            outputLine = outputLine.replace("[", "");
            outputLine = outputLine.replace("]", "");
            String[] outputSales = outputLine.split(", ");

            int len = outputSales.length;

            int year = 2013;
            int quarter = 1;
            int sales = Integer.parseInt(outputSales[0]);

            for (int i = 0; i < len; i++){
                SimulDto tmp = new SimulDto();;
                tmp.setYear(year);
                tmp.setQuarter(i%4 + 1);
                tmp.setValue(Integer.parseInt(outputSales[i]));
                tmp.setDongName(simulDto.getDongName());
                tmp.setIndustryName(simulDto.getIndustryName());

                if(i % 4 == 3) year++;
                output.add(tmp);
            }
            br.close();

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return output;
    }
}

