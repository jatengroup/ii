function ItemController($scope, $stateParams, $state, $api) {
    $scope.number = $stateParams.number;
    if ($scope.number == 0) {
        $scope.content = "Причём <term id=\"ра\" title=\"резонационная Активность\">РА</term> это «<term id=\"резонационная Активность\">квантовое схлопывание</term>» (резонационное «совмещение» лийллусцивных участков сллоогрентной ф-Конфигурации) может происходить на любом из Уровней проявления «личностного» Самосознания, начиная с самых низших, заканчивая самыми качественными (для данной НУУ-ВВУ-Конфигурации). При высокой коварллертности СФУУРММ-Форм, структурирующих какое-то из Направлений Фокусных Динамик «текущей» и «следующей» «личностной» Интерпретации, они синтезируются до общего для них состояния лийллусцивности и благодаря этому у Формо-Творцов какого-то из других участков «новой» НУУ-ВВУ-Конфигурации (не обязательно дувуйллерртных с данным резопазоном), за счёт только что добавленного фрагмента Информации, в данном режиме проявления образуются реальные возможности для формирования наиболее высокой коварллертности (почти лийллусцивности), что предопределяет следующую мгновенную активность Формо-Творцов Фокусной Динамики (то есть очередной акт «квантового смещения») именно в данном конкретном резопазоне. Этот помгновенный процесс «очаговых» (в случае активизации множества дувуйллерртных участков) или «точечных» (при резонации недувуйллерртных резопазонов) трансмутаций осуществляется в нашей Фокусной Динамике непрерывно и бесконечно.";
    } else {
        $scope.content = "Загрузка...";
        $api.item.get($scope.number).then(function (item) {
            copyObjectTo(item, $scope);
        });
        $scope.goPrev = function() {
            $state.go($scope.prev);
        };
        $scope.goNext = function() {
            $state.go($scope.next);
        }
    }
}
