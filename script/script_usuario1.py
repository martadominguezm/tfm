from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import time
import random


# Definimos el número de sesiones 
num_sesiones = 25
recorridos_user1 = {
    1: [
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/padel",
        "http://localhost:8080/deportes/padel/reservasPadel",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/deportes/tenis/reservasTenis",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/noticias",
        "http://localhost:8080/noticias/eventos",
        "http://localhost:8080/noticias/eventos/eventoRegistrado",
        "http://localhost:8080/deportes",
        "http://localhost:8080/home",
        "http://localhost:8080/aboutus"

    ],
    2: [
        "http://localhost:8080/noticias",
        "http://localhost:8080/home",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/deportes/baloncesto/reservasBaloncesto",
        "http://localhost:8080/home",
        "http://localhost:8080/noticias"
    ],
    3: [
        "http://localhost:8080/tiempo",
        "http://localhost:8080/deportes/futbol/reservasFutbol",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/deportes/padel/reservasPadel",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/home",
        "http://localhost:8080/noticias",
        "http://localhost:8080/noticias/eventos",
        "http://localhost:8080/noticias/eventos/eventoRegistrado"
    ],
    4: [
        "http://localhost:8080/aboutus",
        "http://localhost:8080/carrito/pago/pagoCompletado",
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/tenis",
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/baloncesto",
        "http://localhost:8080/deportes/baloncesto/reservasBaloncesto",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/noticias",
        "http://localhost:8080/tiempo"
    ],
    5: [
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/deportes/padel/reservasPadel",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/noticias",
        "http://localhost:8080/noticias/eventos",
        "http://localhost:8080/noticias"
    ],
    6: [
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/futbol",
        "http://localhost:8080/deportes/futbol/reservasFutbol",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/padel",
        "http://localhost:8080/deportes/padel/reservasPadel",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/aboutus",
        "http://localhost:8080/home"
    ],
    7: [
        "http://localhost:8080/deportes",
        "http://localhost:8080/tiempo",
        "http://localhost:8080/deportes/tenis/reservasTenis",
        "http://localhost:8080/tiempo",
        "http://localhost:8080/deportes/futbol/reservasFutbol",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/deportes/padel/reservasPadel",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/noticias"
    ],
    8: [
        "http://localhost:8080/aboutus",
        "http://localhost:8080/home",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/tiempo",
        "http://localhost:8080/deportes/baloncesto/reservasBaloncesto",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/noticias",
        "http://localhost:8080/noticias/eventos",
        "http://localhost:8080/noticias/eventos/eventoRegistrado",
        "http://localhost:8080/noticias",
        "http://localhost:8080/noticias/eventos",
        "http://localhost:8080/noticias/eventos/eventoRegistrado"
    ],
    9: [
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/tenis",
        "http://localhost:8080/deportes/tenis/reservasTenis",
        "http://localhost:8080/tiempo",
        "http://localhost:8080/deportes/tenis/reservasTenis",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/home",
        "http://localhost:8080/carrito/pago/pagoCompletado"
    ],
    10: [
        "http://localhost:8080/noticias",
        "http://localhost:8080/tiempo",
        "http://localhost:8080/deportes/padel/reservasPadel",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/home",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/noticias",
        "http://localhost:8080/noticias/eventos",
        "http://localhost:8080/noticias/eventos/eventoRegistrado",
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/baloncesto",
        "http://localhost:8080/deportes/baloncesto/reservasBaloncesto"
    ],
    11: [
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/padel",
        "http://localhost:8080/deportes/padel/reservasPadel",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/deportes/tenis/reservasTenis",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/noticias",
        "http://localhost:8080/noticias/eventos",
        "http://localhost:8080/noticias/eventos/eventoRegistrado",
        "http://localhost:8080/deportes",
        "http://localhost:8080/home",
        "http://localhost:8080/aboutus"

    ],
    12: [
        "http://localhost:8080/noticias",
        "http://localhost:8080/home",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/deportes/baloncesto/reservasBaloncesto",
        "http://localhost:8080/home",
        "http://localhost:8080/noticias"
    ],
    13: [
        "http://localhost:8080/tiempo",
        "http://localhost:8080/deportes/futbol/reservasFutbol",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/deportes/padel/reservasPadel",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/home",
        "http://localhost:8080/noticias",
        "http://localhost:8080/noticias/eventos",
        "http://localhost:8080/noticias/eventos/eventoRegistrado"
    ],
    14: [
        "http://localhost:8080/aboutus",
        "http://localhost:8080/carrito/pago/pagoCompletado",
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/tenis",
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/baloncesto",
        "http://localhost:8080/deportes/baloncesto/reservasBaloncesto",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/noticias",
        "http://localhost:8080/tiempo"
    ],
    15: [
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/deportes/padel/reservasPadel",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/noticias",
        "http://localhost:8080/noticias/eventos",
        "http://localhost:8080/noticias"
    ],
    16: [
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/futbol",
        "http://localhost:8080/deportes/futbol/reservasFutbol",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/padel",
        "http://localhost:8080/deportes/padel/reservasPadel",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/aboutus",
        "http://localhost:8080/home"
    ],
    17: [
        "http://localhost:8080/deportes",
        "http://localhost:8080/tiempo",
        "http://localhost:8080/deportes/tenis/reservasTenis",
        "http://localhost:8080/tiempo",
        "http://localhost:8080/deportes/futbol/reservasFutbol",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/deportes/padel/reservasPadel",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/noticias"
    ],
    18: [
        "http://localhost:8080/aboutus",
        "http://localhost:8080/home",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/tiempo",
        "http://localhost:8080/deportes/baloncesto/reservasBaloncesto",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/noticias",
        "http://localhost:8080/noticias/eventos",
        "http://localhost:8080/noticias/eventos/eventoRegistrado",
        "http://localhost:8080/noticias",
        "http://localhost:8080/noticias/eventos",
        "http://localhost:8080/noticias/eventos/eventoRegistrado"
    ],
    19: [
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/tenis",
        "http://localhost:8080/deportes/tenis/reservasTenis",
        "http://localhost:8080/tiempo",
        "http://localhost:8080/deportes/tenis/reservasTenis",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/home",
        "http://localhost:8080/carrito/pago/pagoCompletado"
    ],
    20: [
        "http://localhost:8080/noticias",
        "http://localhost:8080/tiempo",
        "http://localhost:8080/deportes/padel/reservasPadel",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/home",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/noticias",
        "http://localhost:8080/noticias/eventos",
        "http://localhost:8080/noticias/eventos/eventoRegistrado",
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/baloncesto",
        "http://localhost:8080/deportes/baloncesto/reservasBaloncesto"
    ],
    21: [
        "http://localhost:8080/aboutus",
        "http://localhost:8080/home",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/tiempo",
        "http://localhost:8080/deportes/baloncesto/reservasBaloncesto",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/noticias",
        "http://localhost:8080/noticias/eventos",
        "http://localhost:8080/noticias/eventos/eventoRegistrado",
        "http://localhost:8080/noticias",
        "http://localhost:8080/noticias/eventos",
        "http://localhost:8080/noticias/eventos/eventoRegistrado"
    ],
    22: [
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/padel",
        "http://localhost:8080/deportes/padel/reservasPadel",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/deportes/tenis/reservasTenis",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/noticias",
        "http://localhost:8080/noticias/eventos",
        "http://localhost:8080/noticias/eventos/eventoRegistrado",
        "http://localhost:8080/deportes",
        "http://localhost:8080/home",
        "http://localhost:8080/aboutus"

    ],
    23: [
        "http://localhost:8080/tiempo",
        "http://localhost:8080/deportes/futbol/reservasFutbol",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/deportes/padel/reservasPadel",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/home",
        "http://localhost:8080/noticias",
        "http://localhost:8080/noticias/eventos",
        "http://localhost:8080/noticias/eventos/eventoRegistrado"
    ],
    24: [
        "http://localhost:8080/aboutus",
        "http://localhost:8080/carrito/pago/pagoCompletado",
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/tenis",
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/baloncesto",
        "http://localhost:8080/deportes/baloncesto/reservasBaloncesto",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/noticias",
        "http://localhost:8080/tiempo"
    ],
    25: [
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/deportes/padel/reservasPadel",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/noticias",
        "http://localhost:8080/noticias/eventos",
        "http://localhost:8080/noticias"
    ],
    26: [
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/futbol",
        "http://localhost:8080/deportes/futbol/reservasFutbol",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/deportes",
        "http://localhost:8080/deportes/padel",
        "http://localhost:8080/deportes/padel/reservasPadel",
        "http://localhost:8080/pistaReservada",
        "http://localhost:8080/aboutus",
        "http://localhost:8080/home"
    ]
}


# Configuramos las opciones del navegador Chrome
chrome_options = Options()
chrome_options.add_argument("--start-maximized")

driver = webdriver.Chrome(options=chrome_options)
driver.get("http://localhost:8080")



wait = WebDriverWait(driver, 10)


for sesion in range(1, num_sesiones + 1):
    print(f"=== Sesión {sesion} ===")

    email_field = wait.until(EC.visibility_of_element_located((By.ID, "email")))
    password_field = wait.until(EC.visibility_of_element_located((By.ID, "password")))
    login_button = wait.until(EC.visibility_of_element_located((By.ID, "button_login")))
    
    email_field.send_keys("usuario1@gmail.com")
    password_field.send_keys("123456")
    
    login_button.click()
    
    wait.until(EC.url_contains("http://localhost:8080/home"))
    
    
    recorrido = random.choice(list(recorridos_user1.values())) # recorrido correspondiente a la sesión actual seleccionándolo aleatoriamente
    
    if recorrido:
        for ruta in recorrido:
            print(f"Navegando a: {ruta}")
            time.sleep(3)
            driver.get(ruta)
    
    print("Cerrando sesión...")
    dropdown_button = wait.until(EC.visibility_of_element_located((By.ID, "dropdown_button")))
    dropdown_button.click()
    wait.until(EC.visibility_of_element_located((By.ID, "button_logout")))
    logout_button = driver.find_element(By.ID, "button_logout")
    logout_button.click()
    print("Sesión cerrada.")
    
driver.quit()
print("Navegador cerrado.")