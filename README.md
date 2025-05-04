# TMDB_practive
### <tmdb.js>

tmdb api를 가져오는 내용을 이 파일에서 정리했다.

fetchMovies에서는 query,즉 검색어가 없으면 자체의 인기영화, 있으면 검색 결과르 바탕으로 리스트를 가져오게했다.

fetchMovieDetail에서는 클릭한 영화의 상세정보를 리턴한다

### <loader.js>

loadInitialMovies는 인기영화데이터를 받아오고, 렌더무비즈로 렌더링한다

searchMovies는 검색어 기반으로 보여준다. 이때 검색창에 입력한 값의 공백을 제거한다.

updateBookmarkCount는 로컬스토리지에서 북마크 길이를 가져와 북마크 버튼 오른쪽에 북마크 갯수를 보여준다

### <eventHandlers.js>

전체를 initEvents로 묶어 main.js에서 호출하게 한다

검색창 입력에 대해 엔터, 클릭 이벤트도 추가해줬지만 그런거 없이 쓰로틀링 진행한 코드에서 검색어 입력 중간에 500ms 딜레이로 검색결과를 바로 보여주게 한다

영화 클릭 이벤트는, 일단 카드 내부 아무곳이나 클릭해도 .movie-card 로 되게 했다.

그리고 북마크 버튼클릭인지, 아니면 그 외부 영역인지로 나누어 북마크 버튼 클릭 시 북마크 추가, 제거 로 인한 로컬 스토리지 변경, UI변경, alert 보이기 등을 진행한다.

북마크 버튼 아닌 부분은 모달을 연다.

북마크 목록 보기 버튼은 로컬스토리지 이용, 저장된 ID로 상세정보를 하나씩 받아오고 렌더링한다.

홈버튼은 다시 인기영화를 불러온다.

### <bookmark.js>

기본적으로 로컬 스토리지를 관리한다

addBookmark에서 현재 북마크 목록 불러오고, 중복없으면 배열에 추가한다.

removeBookmark에서는 필터로 id제거하고, 새로 저장한다

getBookmarks에서는 parse로 문자열을 다시 배열로, 아무것도 없으면 빈 배열을 반환한다

### <ui.js>

renderMovies는 기본적으로 영화 데이터 배열을 받아서 container에 HTML로 렌더링한다.

각 영화에 대해 HTML을 생성하기 위해 map 을 사용했고, 나중에 join으로 합쳐준다.

북마크 버튼은 앞서 bookmark.js에서 만든 함수인 isBookmarked를 import하여 북마크 여부로 보이는 UI가 다르게 한다.

### <modal.js>

모달에 관한 코드들이며, HTML문자열도 이 파일에서 넣어준다.

html부분을 index.html에서 만들어 놓고 class를 통해 껐다 켰다 하는게 좋을지 이 방법이 좋을지 고려하다가, modal.js에 모달에 관한 정보가 최대한 모두 있는게 좋다고 생각해서 이렇게 만들었다.

모달을 열면 hidden을 없애고, 닫기버튼을 누르면 다시 hidden을 켜준다
