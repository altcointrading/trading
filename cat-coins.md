---
layout: page
title: "best altcoins"
description: "Featured altcoins and analyses."
permalink: /category/altcoins/
---

{{ site.ads.aads728 }}


<h4 class="exa">All posts related to <b>altcoins</b></h4>

<p>{{ site.ads.trezorlong }}</p>

<span id="note">"Featured altcoins"</span>

{% for post in site.posts %}
  {% if post.category contains "coins" or post.categories contains "coins" %}
  <h4 class="post">
  <strong>
  <a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title | capitalize }}</a>
  </strong>
  <small>{{ post.date | date_to_string }}</small>
  </h4>

  <div class="row">

    <div class="nine columns">
      {{ post.description }}
    </div>

    {% if post.image[0] %}
    <div class="three columns">
      <a target="_blank" href="{{ post.url }}">
        <figure class="thumb">
          <amp-img itemprop="image" src="{{ post.image[0] }}" alt="Altcoin Trading Blog" layout=""
          width="150px" height="80px">
          </amp-img>
        </figure>
      </a>
    </div>
    {% endif %}



  </div>


  {% endif %}
{% endfor %}
