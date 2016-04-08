module Jekyll
  class AffTag < Liquid::Tag
    @text = ''
    @link = ''

    def initialize(tag_name, markup, tokens)
      if markup =~ /(.+)(\s+(https?:\S+))/i
        @text = $1
        @link = $3
      end
      super
    end

    def render(context)
      output = super
      "<a class='external' rel='nofollow' target='_blank' href='"+@link+"'>"+@text+"</a>"
    end
  end
end

Liquid::Template.register_tag('aff', Jekyll::AffTag)
