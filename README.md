# corazon
<p align="center">Corazon 是一款用心制作的简约的<a href="http://hexo.io">Hexo</a> 主题。</p>


### 标签页 Tags page

> 添加一个标签页面，里面包含您网站中的所有标签。

- 创建一个名为 `tags` 页面

        hexo new page "tags"

- 编辑标签页, 设置页面类型为`tags`.
        ---
        title: tags
        date: 2017-11-23 04:23:50
        type: "tags"
        comments: false
        ---

- 添加 `tags` 到主题配置文件 `_config.yml` 里:

        menu:
          home: /
          archives: /archives
          tags: /tags/ || tags


### 版本 Version
  - v1.0.0 基本功能实现
  - v1.0.1 基于Hexo提供的官方测试，调整布局，修复bug
