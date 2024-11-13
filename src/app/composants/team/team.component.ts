import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit{
 ngOnInit(): void {
  const swiper = new Swiper('.slide-wrapper', {
    // Configuration Swiper
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    breakpoints:{
      0:{
        slidesPerView : 1
      },
      620:{
        slidesPerView : 2
      },
      1024:{
        slidesPerView : 3
      }

    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true, 
    },
  });
 }
 }
