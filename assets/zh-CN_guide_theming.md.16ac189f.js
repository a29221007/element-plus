import{_ as n,r as s,c as a,b as e,a as t,w as o,d as p,e as c,o as l}from"./app.73d59fdb.js";const i='{"title":"主题","description":"","frontmatter":{"title":"主题"},"headers":[{"level":2,"title":"更换主题色","slug":"更换主题色-since-1-1-0-beta-1"},{"level":3,"title":"通过 SCSS 变量","slug":"通过-scss-变量"},{"level":3,"title":"如何覆盖它？","slug":"如何覆盖它？"},{"level":3,"title":"By CSS Variable","slug":"by-css-variable"},{"level":2,"title":"Change theme color","slug":"change-theme-color-deprecated-since-1-1-0-beta-1"},{"level":3,"title":"Update SCSS variables in your project","slug":"update-scss-variables-in-your-project"},{"level":3,"title":"CLI theme tool","slug":"cli-theme-tool"},{"level":3,"title":"Use custom theme","slug":"use-custom-theme"}],"relativePath":"zh-CN/guide/theming.md","lastUpdated":1634544255519}',u={},r=e("h1",{id:"自定义主题",tabindex:"-1"},[p("自定义主题 "),e("a",{class:"header-anchor",href:"#自定义主题","aria-hidden":"true"},"#")],-1),k=e("p",null,"Element Plus 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。 但是如果 你需要在大规模上替换样式，例如： 将主题颜色从 蓝色改为橙色或绿色，也许一个人将其覆盖起来不是一个好主意。 我们 提供四种方法来改变风格变量。",-1),d={id:"更换主题色-since-1-1-0-beta-1",tabindex:"-1"},m=p("更换主题色 "),h=p("since 1.1.0-beta.1"),f=p(),g=e("a",{class:"header-anchor",href:"#更换主题色-since-1-1-0-beta-1","aria-hidden":"true"},"#",-1),y=c('<p>以下是自定义主题的一些例子。</p><ul><li>全部导入：<a href="https://github.com/element-plus/element-plus-vite-starter" target="_blank" rel="noopener noreferrer">element-plus-vite-starter</a></li><li>按需导入：<a href="https://github.com/element-plus/unplugin-element-plus" target="_blank" rel="noopener noreferrer">unplugin-element-plus/examples/vite</a></li></ul><h3 id="通过-scss-变量" tabindex="-1">通过 SCSS 变量 <a class="header-anchor" href="#通过-scss-变量" aria-hidden="true">#</a></h3><p><code>theme-chalk</code> 使用SCSS编写而成。 你可以在 <a href="https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss" target="_blank" rel="noopener noreferrer"><code>packages/theme-chalk/src/common/var.scss</code></a>.文件中查找SCSS变量。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>We use sass modules (<a href="https://sass-lang.com/documentation/values/maps" target="_blank" rel="noopener noreferrer">sass:map</a>...) to refactor all SCSS variables.</p><blockquote><p><a href="https://css-tricks.com/introducing-sass-modules/" target="_blank" rel="noopener noreferrer">Introducing Sass Modules | CSS-TRICKS</a></p></blockquote><p>例如， 使用<code>$colors</code>变量映射不同颜色。</p><p><code>$notification</code> 是所有<code>notification</code> 组件的变量的映射。</p><p>In the future, we will write documentation for variables that can be customized for each component. You can also directly checkout the source <a href="https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss" target="_blank" rel="noopener noreferrer">var.scss</a>.</p></div><div class="language-scss"><pre><code><span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> map.<span class="token function">deep-merge</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span>\n    <span class="token string">&#39;white&#39;</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">,</span>\n    <span class="token string">&#39;black&#39;</span><span class="token punctuation">:</span> #000000<span class="token punctuation">,</span>\n    <span class="token string">&#39;primary&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #409eff<span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;success&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #67c23a<span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;warning&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #e6a23c<span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;danger&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #f56c6c<span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;error&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #f56c6c<span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;info&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n      <span class="token string">&#39;base&#39;</span><span class="token punctuation">:</span> #909399<span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token variable">$--colors</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="如何覆盖它？" tabindex="-1">如何覆盖它？ <a class="header-anchor" href="#如何覆盖它？" aria-hidden="true">#</a></h3><p>If your project also uses SCSS, you can directly change Element Plus style variables. Create a new style file, e.g. <code>styles/element/index.scss</code>:</p><div class="language-scss"><pre><code><span class="token comment">// styles/element/index.scss</span>\n<span class="token comment">/* just override what you need */</span>\n<span class="token keyword">@forward</span> <span class="token string">&quot;element-plus/theme-chalk/src/common/var.scss&quot;</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>\n  <span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n    <span class="token string">&quot;primary&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n      <span class="token string">&quot;base&quot;</span><span class="token punctuation">:</span> green<span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">@import</span> <span class="token string">&quot;element-plus/theme-chalk/src/index.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><p>Then in the entry file of your project, import this style file instead of Element&#39;s built CSS:</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Import <code>element/index.scss</code> before scss of element-plus to avoid the problem of sass mixed variables, because we need generate light-x by your custom variables.</p></div><p>Create a <code>element/index.scss</code> to combine your variables and variables of element-plus. (If you import them in ts, they will not be combined.)</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In addition, you should distinguish your scss from the element variable scss. If they are mixed together, each hot update of <code>element-plus</code> needs to compile a large number of scss files, resulting in slow speed.</p></div><div class="language-ts"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">import</span> <span class="token string">&#39;./styles/element/index.scss&#39;</span>\n<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>\n</code></pre></div><p>If you are using vite, and you want to custom theme when importing on demand.</p><p>Use <code>scss.additionalData</code> to compile variables with scss of every compoent.</p><div class="language-ts"><pre><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>\n<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>\n\n<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;unplugin-element-plus/vite&#39;</span>\n\n<span class="token comment">// vite.config.ts</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>\n    alias<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token string">&#39;~/&#39;</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  css<span class="token operator">:</span> <span class="token punctuation">{</span>\n    preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n      scss<span class="token operator">:</span> <span class="token punctuation">{</span>\n        additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">@use &quot;~/styles/element/index.scss&quot; as *;</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">ElementPlus</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      useSource<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="by-css-variable" tabindex="-1">By CSS Variable <a class="header-anchor" href="#by-css-variable" aria-hidden="true">#</a></h3><p>CSS Variables is a very useful feature, already supported by almost all browsers. (IE: Wait?)</p><blockquote><p>Learn more from <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer">Using CSS custom properties (variables) | MDN</a></p></blockquote><p>We have used css variables to reconstruct the style system of almost all components. (Since <code>1.0.2-beta-70</code> <a href="https://github.com/element-plus/element-plus/issues/2242" target="_blank" rel="noopener noreferrer">#2242</a>)</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>It is compatible with the SCSS variable system. We use the function of SCSS to automatically generate css variables for use.</p></div><p>This means you can dynamically change individual variables inside the component to better customize it without having to modify scss and recompile it.</p><blockquote><p>In the future, the css variable names and role documentation for each component will be written to each component.</p></blockquote><p>Like this:</p><div class="language-css"><pre><code><span class="token selector">:root</span> <span class="token punctuation">{</span>\n  <span class="token property">--el-color-primary</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>If you just want to customize a particular component, just add inline styles for certain components individually.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tag</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--el-tag-background-color</span><span class="token punctuation">:</span> red</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tag</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>For performance reasons, it is more recommended to custom css variables under a class rather than the global <code>:root</code>.</p><div class="language-css"><pre><code><span class="token selector">.custom-class</span> <span class="token punctuation">{</span>\n  <span class="token property">--el-tag-background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>If you want to control css var by script, try this:</p><div class="language-ts"><pre><code><span class="token comment">// document.documentElement is global</span>\n<span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement\n<span class="token comment">// const el = document.getElementById(&#39;xxx&#39;)</span>\n\n<span class="token comment">// get css var</span>\n<span class="token function">getComputedStyle</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">--el-color-primary</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n\n<span class="token comment">// set css var</span>\nel<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">&#39;--el-color-primary&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>\n</code></pre></div><p>If you want a more elegant way, check this out. <a href="https://vueuse.org/core/usecssvar/" target="_blank" rel="noopener noreferrer">useCssVar | VueUse</a></p>',33),b={id:"change-theme-color-deprecated-since-1-1-0-beta-1",tabindex:"-1"},v=p("Change theme color "),w=p("Deprecated since 1.1.0-beta.1"),S=p(),C=e("a",{class:"header-anchor",href:"#change-theme-color-deprecated-since-1-1-0-beta-1","aria-hidden":"true"},"#",-1),I=c('<p>If you just want to change the theme color of Element Plus, the <a href="https://element-plus.github.io/theme-chalk-preview/#/en-US" target="_blank" rel="noopener noreferrer">theme preview website</a> is recommended. The theme color of Element Plus is bright and friendly blue. By changing it, you can make Element Plus more visually connected to specific projects.</p><p>The above website enables you to preview theme of a new theme color in real-time, and it can generate a complete style package based on the new theme color for you to download directly (to import new style files in your project, please refer to the &#39;Import custom theme&#39; or &#39;Import component theme on demand&#39; part of this section).</p><h3 id="update-scss-variables-in-your-project" tabindex="-1">Update SCSS variables in your project <a class="header-anchor" href="#update-scss-variables-in-your-project" aria-hidden="true">#</a></h3><p><code>theme-chalk</code> is written in SCSS. If your project also uses SCSS, you can directly change Element Plus style variables. Create a new style file, e.g. <code>element-variables.scss</code>:</p><div class="language-scss"><pre><code><span class="token comment">/* theme color */</span>\n<span class="token property"><span class="token variable">$--color-primary</span></span><span class="token punctuation">:</span> teal<span class="token punctuation">;</span> <span class="token comment">/* icon font path, required */</span>\n<span class="token property"><span class="token variable">$--font-path</span></span><span class="token punctuation">:</span> <span class="token string">&#39;~element-plus/lib/theme-chalk/fonts&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">@use</span> <span class="token string">&#39;~element-plus/packages/theme-chalk/src/index&#39;</span><span class="token punctuation">;</span>\n</code></pre></div><p>Then in the entry file of your project, import this style file instead of Element&#39;s built CSS:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;./element-variables.scss&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Note that it is required to override icon font path to the relative path of Element&#39;s font files.</p></div><h3 id="cli-theme-tool" tabindex="-1">CLI theme tool <a class="header-anchor" href="#cli-theme-tool" aria-hidden="true">#</a></h3><p>If you project doesn&#39;t use SCSS, you can customize themes with our CLI theme tool:</p><h4 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h4><p>First install the theme generator globally or locally. Local install is recommended because in this way, when others clone your project, npm will automatically install it for them.</p><div class="language-shell"><pre><code><span class="token function">npm</span> i element-theme -g\n</code></pre></div><p>Then install the chalk theme from npm or GitHub.</p><div class="language-shell"><pre><code><span class="token comment"># from npm</span>\n<span class="token function">npm</span> i element-theme-chalk -D\n\n<span class="token comment"># from GitHub</span>\n<span class="token function">npm</span> i https://github.com/ElementUI/theme-chalk -D\n</code></pre></div><h4 id="initialize-variable-file" tabindex="-1">Initialize variable file <a class="header-anchor" href="#initialize-variable-file" aria-hidden="true">#</a></h4><p>After successfully installing the above packages, a command named <code>et</code> is available in CLI (if the packages are installed locally, use <code>node_modules/.bin/et</code> instead). Run <code>-i</code> to initialize the variable file which outputs to <code>element-variables.scss</code> by default. And you can specify its output directory as you will.</p><div class="language-shell"><pre><code>et -i <span class="token punctuation">[</span>custom output file<span class="token punctuation">]</span>\n\n<span class="token operator">&gt;</span> ✅ Generator variables <span class="token function">file</span>\n</code></pre></div><p>In <code>element-variables.scss</code> you can find all the variables we used to style Element Plus and they are defined in SCSS format. Here&#39;s a snippet:</p><div class="language-css"><pre><code>$<span class="token property">--color-primary</span><span class="token punctuation">:</span> #409EFF !default<span class="token punctuation">;</span>\n$<span class="token property">--color-primary-light-1</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 10%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* 53a8ff */</span>\n$<span class="token property">--color-primary-light-2</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 20%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* 66b1ff */</span>\n$<span class="token property">--color-primary-light-3</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 30%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* 79bbff */</span>\n$<span class="token property">--color-primary-light-4</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 40%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* 8cc5ff */</span>\n$<span class="token property">--color-primary-light-5</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* a0cfff */</span>\n$<span class="token property">--color-primary-light-6</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 60%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* b3d8ff */</span>\n$<span class="token property">--color-primary-light-7</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 70%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* c6e2ff */</span>\n$<span class="token property">--color-primary-light-8</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 80%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* d9ecff */</span>\n$<span class="token property">--color-primary-light-9</span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span>$--color-white<span class="token punctuation">,</span> $--color-primary<span class="token punctuation">,</span> 90%<span class="token punctuation">)</span> !default<span class="token punctuation">;</span> <span class="token comment">/* ecf5ff */</span>\n\n$<span class="token property">--color-success</span><span class="token punctuation">:</span> #67c23a !default<span class="token punctuation">;</span>\n$<span class="token property">--color-warning</span><span class="token punctuation">:</span> #e6a23c !default<span class="token punctuation">;</span>\n$<span class="token property">--color-danger</span><span class="token punctuation">:</span> #f56c6c !default<span class="token punctuation">;</span>\n$<span class="token property">--color-info</span><span class="token punctuation">:</span> #909399 !default<span class="token punctuation">;</span>\n\n...\n</code></pre></div><h4 id="modify-variables" tabindex="-1">Modify variables <a class="header-anchor" href="#modify-variables" aria-hidden="true">#</a></h4><p>Just edit <code>element-variables.scss</code>, e.g. changing the theme color to red:</p><div class="language-CSS"><pre><code>$<span class="token property">--color-primary</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n</code></pre></div><h4 id="build-theme" tabindex="-1">Build theme <a class="header-anchor" href="#build-theme" aria-hidden="true">#</a></h4><p>After saving the variable file, use <code>et</code> to build your theme. You can activate <code>watch</code> mode by adding a parameter <code>-w</code>. And if you customized the variable file&#39;s output, you need to add a parameter <code>-c</code> and variable file&#39;s name. By default the build theme file is placed inside <code>./theme</code>. You can specify its output directory with parameter <code>-o</code>.</p><div class="language-shell"><pre><code>et\n\n<span class="token operator">&gt;</span> ✅ build theme font\n<span class="token operator">&gt;</span> ✅ build element theme\n</code></pre></div><h3 id="use-custom-theme" tabindex="-1">Use custom theme <a class="header-anchor" href="#use-custom-theme" aria-hidden="true">#</a></h3><p>We will cover how to use your customized theme in your project in this section</p><h4 id="import-custom-theme" tabindex="-1">Import custom theme <a class="header-anchor" href="#import-custom-theme" aria-hidden="true">#</a></h4><p>Importing your own theme is just like importing the default theme, only this time you import the file built from &quot;Online Theme Roller&quot; or &quot;CLI tool&quot;:</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;../theme/index.css&#39;</span>\n<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n\n<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>\n</code></pre></div><h4 id="import-component-theme-on-demand" tabindex="-1">Import component theme on demand <a class="header-anchor" href="#import-component-theme-on-demand" aria-hidden="true">#</a></h4><p>If you are using <code>babel-plugin-component</code> for on-demand import, just modify <code>.babelrc</code> and specify <code>styleLibraryName</code> to the path where your custom theme is located relative to <code>.babelrc</code>. Note that <code>~</code> is required:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">&quot;component&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;libraryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;element-plus&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;styleLibraryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~theme&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>If you are unfamiliar with <code>babel-plugin-component</code>, please refer to <a href="/en-US/guide/quickstart.html">Quick Start</a>. For more details, check out the <a href="https://github.com/ElementUI/element-theme" target="_blank" rel="noopener noreferrer">project repository</a> of <code>element-theme</code>.</p>',35);var _=n(u,[["render",function(n,p,c,i,u,_){const x=s("el-tag");return l(),a("div",null,[r,k,e("h2",d,[m,t(x,{type:"success",style:{"vertical-align":"middle"}},{default:o((()=>[h])),_:1}),f,g]),y,e("h2",b,[v,t(x,{type:"error",style:{"vertical-align":"middle"}},{default:o((()=>[w])),_:1}),S,C]),I])}]]);export{i as __pageData,_ as default};
