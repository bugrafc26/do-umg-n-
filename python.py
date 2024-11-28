import pygame
import time

# Pygame'i başlat
pygame.init()

# Ekran boyutları
width, height = 800, 600
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Doğum Günün Kutlu Olsun")

# Renkler
background_color = (255, 255, 255)  # Beyaz
text_color = (255, 0, 0)  # Kırmızı

# Yazı fontu
font = pygame.font.SysFont("Arial", 60)

# Yazıyı oluştur
text = font.render("Doğum Günün Kutlu Olsun!", True, text_color)

# Ekrana yazıyı yerleştir
text_rect = text.get_rect(center=(width // 2, height // 2))

# Animasyon döngüsü
running = True
while running:
    screen.fill(background_color)
    screen.blit(text, text_rect)
    pygame.display.update()

    # 5 saniye sonra animasyonu bitir
    time.sleep(5)
    running = False

pygame.quit()
