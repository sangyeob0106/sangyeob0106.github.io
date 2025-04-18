// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Dark mode toggle
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const moonIcon = '<i class="fas fa-moon"></i>';
  const sunIcon = '<i class="fas fa-sun"></i>';
  
  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark');
      darkModeToggle.innerHTML = sunIcon;
  } else {
      document.documentElement.setAttribute('data-theme', 'light');
      darkModeToggle.innerHTML = moonIcon;
  }
  
  // Toggle dark mode
  darkModeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      let targetTheme = 'light';
      
      if (currentTheme === 'light') {
          targetTheme = 'dark';
          this.innerHTML = sunIcon;
      } else {
          this.innerHTML = moonIcon;
      }
      
      document.documentElement.setAttribute('data-theme', targetTheme);
      localStorage.setItem('theme', targetTheme);
  });
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle) {
      menuToggle.addEventListener('click', function() {
          navMenu.classList.toggle('active');
      });
  }
  
  // Chatbot functionality
  const chatbotBtn = document.querySelector('.chatbot-btn');
  const chatbotContainer = document.querySelector('.chatbot-container');
  const chatbotClose = document.querySelector('.chatbot-close');
  const chatForm = document.querySelector('.chat-input-form');
  const chatInput = document.querySelector('.chat-input');
  const chatBody = document.querySelector('.chatbot-body');
  
  if (chatbotBtn) {
      chatbotBtn.addEventListener('click', function() {
          chatbotContainer.style.display = 'block';
      });
  }
  
  if (chatbotClose) {
      chatbotClose.addEventListener('click', function() {
          chatbotContainer.style.display = 'none';
      });
  }
  
  if (chatForm) {
      chatForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          if (chatInput.value.trim() === '') return;
          
          // Add user message
          addMessage('user', chatInput.value);
          
          // Get bot response
          const botResponse = getBotResponse(chatInput.value);
          
          // Clear input
          chatInput.value = '';
          
          // Add bot response with delay
          setTimeout(() => {
              addMessage('bot', botResponse);
              chatBody.scrollTop = chatBody.scrollHeight;
          }, 500);
          
          chatBody.scrollTop = chatBody.scrollHeight;
      });
  }
  
  // Function to add message to chat
  function addMessage(sender, message) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('chat-message');
      
      if (sender === 'bot') {
          messageDiv.classList.add('bot-message');
          messageDiv.innerHTML = `
              <div class="message-content">${message}</div>
          `;
      } else {
          messageDiv.classList.add('user-message');
          messageDiv.innerHTML = `
              <div class="message-content">${message}</div>
          `;
      }
      
      chatBody.appendChild(messageDiv);
  }
  
  // Simple bot responses
  function getBotResponse(input) {
      input = input.toLowerCase();
      
      if (input.includes('예매') || input.includes('티켓') || input.includes('reservation') || input.includes('ticket')) {
          return '영화 예매는 메인 메뉴의 "예매하기" 버튼을 클릭하시면 됩니다. 원하시는 영화, 상영관, 날짜와 시간을 선택하실 수 있어요!';
      } else if (input.includes('상영') || input.includes('시간') || input.includes('schedule') || input.includes('time')) {
          return '영화 상영 시간은 "상영시간표" 메뉴에서 확인하실 수 있습니다. 지점과 날짜를 선택하시면 상영 영화 목록이 나타납니다.';
      } else if (input.includes('할인') || input.includes('쿠폰') || input.includes('discount') || input.includes('coupon')) {
          return '현재 진행 중인 할인 이벤트는 메인 페이지의 "할인 정보" 섹션에서 확인하실 수 있어요. 학생, 청소년, 시니어 할인도 있으니 확인해보세요!';
      } else if (input.includes('주차') || input.includes('parking')) {
          return '영화관 이용 시 3시간 무료 주차가 가능합니다. 추가 시간은 30분당 1,000원의 요금이 부과됩니다.';
      } else if (input.includes('음식') || input.includes('팝콘') || input.includes('스낵') || input.includes('food') || input.includes('popcorn') || input.includes('snack')) {
          return '다양한 팝콘, 음료, 스낵을 구비하고 있습니다. 예매 과정에서 함께 주문하시면 할인 혜택도 받으실 수 있어요!';
      } else if (input.includes('환불') || input.includes('취소') || input.includes('refund') || input.includes('cancel')) {
          return '예매 취소는 영화 시작 30분 전까지 가능합니다. 마이페이지에서 예매 내역을 확인하고 취소하실 수 있어요.';
      } else if (input.includes('인원') || input.includes('인당') || input.includes('persons')) {
          return '1인당 최대 8매까지 예매 가능합니다. 단체 관람은 고객센터로 문의해주세요.';
      } else if (input.includes('추천') || input.includes('recommendation')) {
          return '현재 인기 있는 영화는 메인 페이지에서 확인하실 수 있어요. 또는 "나에게 맞는 영화 찾기" 기능을 이용해보세요!';
      } else if (input.includes('안녕') || input.includes('hello') || input.includes('hi')) {
          return '안녕하세요! 엽씨네마 챗봇 여비입니다. 무엇을 도와드릴까요?';
      } else {
          return '죄송해요, 이해하지 못했어요. 예매, 상영시간, 할인, 주차 등에 대해 물어보실 수 있어요.';
      }
  }
  
  // Movie carousel functionality
  const carousel = document.querySelector('.movie-carousel-container');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const indicators = document.querySelectorAll('.carousel-indicator');
  let currentSlide = 0;
  
  if (carousel && prevBtn && nextBtn) {
      const slides = carousel.querySelectorAll('.carousel-slide');
      const totalSlides = slides.length;
      
      // Set initial slide
      updateCarousel();
      
      // Previous slide
      prevBtn.addEventListener('click', function() {
          currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
          updateCarousel();
      });
      
      // Next slide
      nextBtn.addEventListener('click', function() {
          currentSlide = (currentSlide + 1) % totalSlides;
          updateCarousel();
      });
      
      // Indicator clicks
      indicators.forEach((indicator, index) => {
          indicator.addEventListener('click', function() {
              currentSlide = index;
              updateCarousel();
          });
      });
      
      // Auto slide
      let autoSlide = setInterval(function() {
          currentSlide = (currentSlide + 1) % totalSlides;
          updateCarousel();
      }, 5000);
      
      // Pause on hover
      carousel.addEventListener('mouseenter', function() {
          clearInterval(autoSlide);
      });
      
      carousel.addEventListener('mouseleave', function() {
          autoSlide = setInterval(function() {
              currentSlide = (currentSlide + 1) % totalSlides;
              updateCarousel();
          }, 5000);
      });
      
      function updateCarousel() {
          // Update slides
          slides.forEach((slide, index) => {
              if (index === currentSlide) {
                  slide.style.display = 'block';
              } else {
                  slide.style.display = 'none';
              }
          });
          
          // Update indicators
          indicators.forEach((indicator, index) => {
              if (index === currentSlide) {
                  indicator.classList.add('active');
              } else {
                  indicator.classList.remove('active');
              }
          });
      }
  }
  
  // Movie recommendation system
  const moodBtns = document.querySelectorAll('.mood-btn');
  const weatherSelect = document.querySelector('#weather-select');
  const recommendBtn = document.querySelector('#recommend-btn');
  const recommendedMoviesContainer = document.querySelector('.recommended-movies');
  
  if (moodBtns.length > 0 && recommendBtn) {
      moodBtns.forEach(btn => {
          btn.addEventListener('click', function() {
              moodBtns.forEach(b => b.classList.remove('active'));
              this.classList.add('active');
          });
      });
      
      recommendBtn.addEventListener('click', function() {
          const selectedMood = document.querySelector('.mood-btn.active')?.dataset.mood || 'happy';
          const selectedWeather = weatherSelect ? weatherSelect.value : 'sunny';
          
          const recommendations = getMovieRecommendations(selectedMood, selectedWeather);
          displayRecommendations(recommendations);
      });
  }
  
  function getMovieRecommendations(mood, weather) {
      // Sample movie data
      const movies = [
          { title: '라라랜드', genre: '뮤지컬/로맨스', mood: ['happy', 'romantic'], weather: ['sunny', 'rainy'], poster: 'images/movie1.jpg' },
          { title: '인셉션', genre: '액션/SF', mood: ['mysterious', 'exciting'], weather: ['cloudy', 'snowy'], poster: 'images/movie2.jpg' },
          { title: '겨울왕국', genre: '애니메이션', mood: ['happy', 'emotional'], weather: ['snowy', 'cloudy'], poster: 'images/movie3.jpg' },
          { title: '인터스텔라', genre: 'SF/드라마', mood: ['mysterious', 'emotional'], weather: ['cloudy', 'snowy'], poster: 'images/movie4.jpg' },
          { title: '어바웃 타임', genre: '로맨스/판타지', mood: ['romantic', 'happy'], weather: ['rainy', 'sunny'], poster: 'images/movie5.jpg' },
          { title: '주토피아', genre: '애니메이션', mood: ['happy', 'exciting'], weather: ['sunny', 'cloudy'], poster: 'images/movie6.jpg' },
          { title: '다크 나이트', genre: '액션/스릴러', mood: ['exciting', 'sad'], weather: ['cloudy', 'rainy'], poster: 'images/movie7.jpg' },
          { title: '그랜드 부다페스트 호텔', genre: '코미디/드라마', mood: ['happy', 'exciting'], weather: ['sunny', 'cloudy'], poster: 'images/movie8.jpg' },
          { title: '인사이드 아웃', genre: '애니메이션', mood: ['emotional', 'happy'], weather: ['sunny', 'rainy'], poster: 'images/movie9.jpg' },
          { title: '월-E', genre: '애니메이션/SF', mood: ['romantic', 'emotional'], weather: ['sunny', 'cloudy'], poster: 'images/movie10.jpg' }
      ];
      
      // Filter movies by mood and weather
      return movies.filter(movie => 
          movie.mood.includes(mood) || movie.weather.includes(weather)
      );
  }
  
  function displayRecommendations(movies) {
      if (!recommendedMoviesContainer) return;
      
      recommendedMoviesContainer.innerHTML = '';
      
      if (movies.length === 0) {
          recommendedMoviesContainer.innerHTML = '<p>추천할 영화가 없습니다. 다른 조건을 선택해보세요.</p>';
          return;
      }
      
      const movieGrid = document.createElement('div');
      movieGrid.classList.add('grid');
      
      movies.forEach(movie => {
          const movieCard = document.createElement('div');
          movieCard.classList.add('movie-card');
          
          movieCard.innerHTML = `
              <img src="${movie.poster}" alt="${movie.title}" class="movie-card-img" onerror="this.src='images/placeholder.jpg'">
              <div class="movie-card-content">
                  <h3 class="movie-card-title">${movie.title}</h3>
                  <p class="movie-card-info">${movie.genre}</p>
                  <div class="movie-card-footer">
                      <a href="movie.html" class="btn btn-primary btn-sm">상세보기</a>
                      <a href="reserve.html" class="btn btn-outline btn-sm">예매하기</a>
                  </div>
              </div>
          `;
          
          movieGrid.appendChild(movieCard);
      });
      
      recommendedMoviesContainer.appendChild(movieGrid);
  }
  
  // Time table functionality
  const dateBtns = document.querySelectorAll('.date-btn');
  const movieTabs = document.querySelectorAll('.movie-tab-btn');
  
  if (dateBtns.length > 0) {
      dateBtns.forEach(btn => {
          btn.addEventListener('click', function() {
              dateBtns.forEach(b => b.classList.remove('active'));
              this.classList.add('active');
              // You would typically fetch new schedule data here
          });
      });
  }
  
  if (movieTabs.length > 0) {
      movieTabs.forEach(tab => {
          tab.addEventListener('click', function() {
              movieTabs.forEach(t => t.classList.remove('active'));
              this.classList.add('active');
              
              const movieId = this.dataset.movie;
              document.querySelectorAll('.movie-times').forEach(times => {
                  times.style.display = 'none';
              });
              document.getElementById(movieId + '-times').style.display = 'block';
          });
      });
  }
  
  // Reservation page functionality
  const timeSlots = document.querySelectorAll('.time-slot:not(.sold-out)');
  const seats = document.querySelectorAll('.seat:not(.unavailable)');
  const quantityBtns = document.querySelectorAll('.quantity-btn');
  
  if (timeSlots.length > 0) {
      timeSlots.forEach(slot => {
          slot.addEventListener('click', function() {
              timeSlots.forEach(s => s.classList.remove('active'));
              this.classList.add('active');
              updateSummary();
          });
      });
  }
  
  if (seats.length > 0) {
      seats.forEach(seat => {
          seat.addEventListener('click', function() {
              this.classList.toggle('selected');
              updateSummary();
          });
      });
  }
  
  if (quantityBtns.length > 0) {
      quantityBtns.forEach(btn => {
          btn.addEventListener('click', function() {
              const input = this.parentElement.querySelector('.quantity-input');
              let value = parseInt(input.value);
              
              if (this.classList.contains('quantity-minus')) {
                  if (value > 0) input.value = value - 1;
              } else {
                  input.value = value + 1;
              }
              
              updateSummary();
          });
      });
  }
  
  function updateSummary() {
      const summaryContainer = document.querySelector('.booking-summary');
      if (!summaryContainer) return;
      
      // Get selected movie
      const movieTitle = document.querySelector('.booking-movie-title')?.textContent || '선택된 영화';
      
      // Get selected time
      const selectedTime = document.querySelector('.time-slot.active')?.textContent || '선택 안됨';
      
      // Get selected seats
      const selectedSeats = document.querySelectorAll('.seat.selected');
      const seatCount = selectedSeats.length;
      const seatList = Array.from(selectedSeats).map(seat => seat.textContent).join(', ');
      
      // Get snacks
      const snackItems = document.querySelectorAll('.snack-item');
      let snackTotal = 0;
      let snackSummary = '';
      
      snackItems.forEach(item => {
          const quantity = parseInt(item.querySelector('.quantity-input').value);
          if (quantity > 0) {
              const name = item.querySelector('.snack-name').textContent;
              const price = parseInt(item.querySelector('.snack-price').textContent.replace(/[^0-9]/g, ''));
              const itemTotal = quantity * price;
              snackTotal += itemTotal;
              
              snackSummary += `<div class="summary-item">
                  <span class="summary-label">${name} x ${quantity}</span>
                  <span class="summary-value">${itemTotal.toLocaleString()}원</span>
              </div>`;
          }
      });
      
      // Calculate total
      const ticketPrice = 12000; // Sample price
      const ticketTotal = seatCount * ticketPrice;
      const total = ticketTotal + snackTotal;
      
      // Update summary
      const summaryContent = document.querySelector('.summary-content');
      if (summaryContent) {
          summaryContent.innerHTML = `
              <div class="summary-item">
                  <span class="summary-label">영화</span>
                  <span class="summary-value">${movieTitle}</span>
              </div>
              <div class="summary-item">
                  <span class="summary-label">시간</span>
                  <span class="summary-value">${selectedTime}</span>
              </div>
              <div class="summary-item">
                  <span class="summary-label">좌석</span>
                  <span class="summary-value">${seatList || '선택 안됨'}</span>
              </div>
              <div class="summary-item">
                  <span class="summary-label">인원</span>
                  <span class="summary-value">${seatCount}명</span>
              </div>
              <div class="summary-item">
                  <span class="summary-label">티켓 금액</span>
                  <span class="summary-value">${ticketTotal.toLocaleString()}원</span>
              </div>
              ${snackSummary}
              <div class="summary-total">
                  <span class="summary-label">총 결제 금액</span>
                  <span class="summary-value">${total.toLocaleString()}원</span>
              </div>
          `;
      }
  }
  
  // My page functionality
  const myPageTabs = document.querySelectorAll('.my-page-tab');
  const myPageContents = document.querySelectorAll('.my-page-content');
  
  if (myPageTabs.length > 0) {
      myPageTabs.forEach(tab => {
          tab.addEventListener('click', function() {
              myPageTabs.forEach(t => t.classList.remove('active'));
              this.classList.add('active');
              
              const tabId = this.dataset.tab;
              myPageContents.forEach(content => {
                  content.style.display = 'none';
              });
              document.getElementById(tabId).style.display = 'block';
          });
      });
  }

  // Initialize star rating if exists
  const starBtns = document.querySelectorAll('.star-btn');
  if (starBtns.length > 0) {
      starBtns.forEach((btn, index) => {
          btn.addEventListener('click', function() {
              // Reset all stars
              starBtns.forEach(b => b.classList.remove('active'));
              
              // Activate clicked star and all stars before it
              for (let i = 0; i <= index; i++) {
                  starBtns[i].classList.add('active');
              }
              
              // Update hidden rating input if exists
              const ratingInput = document.querySelector('#rating-input');
              if (ratingInput) {
                  ratingInput.value = index + 1;
              }
          });
      });
  }
});