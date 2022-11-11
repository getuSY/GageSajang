package com.example.gateway.filter;

import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Objects;

@Component
@Slf4j
public class CustomFilter extends AbstractGatewayFilterFactory<CustomFilter.Config> {
    public CustomFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        // Custom Pre Filter
        return ((exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest(); // pre filter
            ServerHttpResponse response = exchange.getResponse(); // post filter

//            // Request Header 에 token 이 존재하지 않을 때
//            if(!request.getHeaders().containsKey("token")){
//                return handleUnAuthorized(exchange); // 401 Error
//            }
//
//            // Request Header 에서 token 문자열 받아오기
//            List<String> token = request.getHeaders().get("token");
//            String tokenString = Objects.requireNonNull(token).get(0);
//
//            // 토큰 검증
//            if(!tokenString.equals("A.B.C")) {
//                return handleUnAuthorized(exchange); // 토큰이 일치하지 않을 때
//            }


            log.info("Cutsom Pre filter : request id => {}", request.getId());
            log.info("Cutsom Pre filter : request uri => {}", request.getURI());

//          Custom Post Filter
//            return chain.filter(exchange).then(Mono.fromRunnable(() -> {
//                log.info("Custom Post filter : response code -> {}", response.getStatusCode());
//            }));
            return chain.filter(exchange);
        });
    }

    private Mono<Void> handleUnAuthorized(ServerWebExchange exchange) {
        ServerHttpResponse response = exchange.getResponse();

        response.setStatusCode(HttpStatus.UNAUTHORIZED);
        return response.setComplete();
    }

    public static class Config {
        // Put the configuration properties
    }
}
