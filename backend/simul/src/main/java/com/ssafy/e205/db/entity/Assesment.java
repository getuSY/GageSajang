package com.ssafy.e205.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Assesment")
@Getter
@Setter
@Builder
public class Assesment {
        @Id
        String _id;

        private int clerk; // 평균 직원수
        private int area; // 평균 면적
        private float similar; // 평균 유사업종 수
        private float franchise; // 평균 프랜차이즈 수

        private float total; // 평균 점포수
        private float order; // 평균 매출 건수
        private float sales; // 평균 매출

        private float open; // 평균 개업 수
        private float close; // 평균 폐업 수
}
