# IIST Data Analysis and Visualization

## 1. Uruchomienie

### Wymagania wstępne:

- Zainstalowany node.js
- Baza MongoDB lokalna lub w chmurze Atlas MongoDB

### Przygotowanie projektu

1. Pobierz kod z repozytorium, na przykład za pomocą komendy:
`gh repo clone alicjakolodziejczyk/IIST-Data-Analysis-and-Visualization`

2. W folderze `server` dodaj plik `.env` i zapisz w nim parametr `DB` zawierający URL do połączenia z bazą danych.

### Instalacja pakietów Node na backendzie:

```
cd server
npm install
```
### Instalacja pakietów Node na frontendzie:
```
cd client
npm install
```
### Uruchomienie frontendu oraz backendu:
Uruchom poniższą komendę w folderze `client` oraz w folderze `server`:
```
npm start
```

## 2. Obsługa
> [!WARNING]
> Program zawiera na razie dane dotyczące wszystkich przedmiotów obowiązkowych oraz jednej specjalizacji - CE.
> Wybranie innych specjalizacji w filtrze może skutkować brakiem danych do wyświetlenia.

### Podstrona Effects

Strona ta pokazuje, jaka część każdego efektu jest już za studentem, jaką część efektu w danym semestrze zdobywa, a jaką część jeszcze przed nim w przyszłych semestrach.

Aby strona zaczęła wyświetlać dane, należy w panelu po lewej stronie wypełnić przynajmniej semestr, na którym użytkownik się znajduje; reszta danych nie jest wymagana.

- Po najechaniu na pasek postępu wyświetlają się przedmioty, których dane przyczyniły się do danego wyniku konkretnego efektu.
  
### Podstrona Graphs

Wyświetla relację między przedmiotami a efektami.

- Zawiera filtry na ciemnym pasku na dole strony.
- Umożliwia wyświetlenie lub schowanie ilości wspólnych efektów przy użyciu checkboxa.
- Po kliknięciu lewym klawiszem w węzeł podświetlą się wszystkie krawędzie, które z niego wychodzą.
- Po kliknięciu prawym klawiszem w węzeł wyświetli się okienko z pełnymi danymi przedmiotu.
  
### Podstrona Correlation Matrix

  Podstrona zawiera filtry na ciemnym pasku na dole strony, które dotyczą obydwu sekcji.
  
  **Sekcja 1 - Macierz**
    Oprócz wyświetlenia macierzy, sekcja umożliwia:
    - Wyświetlenie nazwy przedmiotu po najechaniu na kod.
    - Wyświetlenie okienka z kompletnymi danymi o przedmiocie po kliknięciu na kod.
    - Wyświetlenie okienka z porównaniem kompletnych danych o przedmiotach składających się na korelację po kliknięciu w wynik korelacji.
    
  **Sekcja 2 - Tabela**
    Wyświetla pary przedmiotów posortowane malejąco względem ich korelacji.
    - Wyświetlenie okienka z porównaniem kompletnych danych o przedmiotach składających się na korelację po kliknięciu w rząd.

### Podstrona Data

 Na tej stronie początkowo wyświetlone są kompletne dane dla każdego przedmiotu w sylabusie. 
 Za pomocą filtrów znajdujących się na ciemnym pasku u dołu można wyświetlić przedmioty spełniające konkretne wymagania, np. semestr 5, przedmioty obieralne, specjalność CE.


