1. Деструктуризация массива похожа на деструктуризацию объекта, только во время масссива мы можем писать деугие имена
2. THIS - это клочевое слово в js, который нам возращает конрекст значениий и методов где он был прописан
3. Если мы глобально (вне функции, объекта) вызываем this, то в браузере нам покажется все методы и свойства которые нам предостваляет браузер (alert, prompt, confirm, documnt)
4. Для того чтобы не дублиорвать методы и функции для каждого объекта, можно использовать 3 методы для подставления контекста (call,apply,bind)

5. Call - он принмает первым параметром контекст(объект), 2,3 n-ым параметром принмает значения в качестве параметра метода или функции

6. Apply - делает все как Call, за исключением того что параметры метода или функции мы указываем в качестве массива

7. Bind - он тоже подставляет контекст, но отличается тем что вызывается не стазу. В результате использования метдоа bind, нам возращает новая функция, которую мы должны вызвать. Если метод который мы "bind"-им должна принемаеть параметры, то в результатибной функции мы там задаем параметры

8. Call/Apply лучше использвоать когда мы хотим получить результат сразу же
9. Bind лучше использовать тогда когда мы хотим вызвыать получить резлуьтат через какое то врмя (по клику, после загрузки тд)
