package com.stgw.springthymeleafgulpwebpack.controller;

import com.stgw.springthymeleafgulpwebpack.constants.Templates;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import reactor.core.publisher.Mono;

@Controller
public class HomePageController {

    @GetMapping("/")
    public Mono<String> homePage(Model model) {
        model.addAttribute("title", "Home Page");
        return Mono.just(Templates.HOME);
    }
}
