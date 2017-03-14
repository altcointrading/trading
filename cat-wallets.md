---
layout: page
title: "altcoin wallets"
description: "Where to keep altcoin safely? There are hardware wallets for altcoins already!"
permalink: /category/wallets/
---

<h4 class="exa">All posts related to <b>altcoin wallets</b></h4>

<p>{{ site.ads.trezorlong }}</p>

<span id="note">"Altcoin wallets"</span>

{% for post in site.posts %}
  {% if post.category contains "wallets" or post.categories contains "wallets" %}
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

{{ site.ads.aads728 }}
