# viewer (3dviewer)

3d viewer

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

### Требование
Требуется создать фронтенд-приложение, содержащее следующий функционал:  
1. По нажатию кнопки верхнего меню, загружается модель в формате gltf в  
сцену по фиксированному url. (сам gltf может быть любой удобной версии,  
типа, сжатия, и прочее)  
2. Меню имеет кнопку удаления модели со сцены.  
3. При загрузке модели, нужно на все грани установить материал, поддерживающий плавные тени.  
4. При загрузке модели, развернуть тело вокруг оси OX на 54 градуса, и сместить вдоль OY на 128 мм.  
5. Допускается использовать любой тип камеры.  
6. В нижнем правом углу необходимо отобразить интерактивную систему координат (gizmo).  
7. Хранение state осуществляется через Pinia.  
8. При клике мышкой по телу - создается точка.  
9. Если точек 2 и более, то добавляем отрезок от предыдущей точки к текущей  
в виде отрезка, и добавляем его длину в колонку «Результаты» в левой части  
окна.  
10. При клике за пределами тела - ничего не происходит.  
11. В любом месте страницы необходимо отображать текущие координаты камеры.  
