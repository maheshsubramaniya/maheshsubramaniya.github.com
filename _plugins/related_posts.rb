#plugin from https://github.com/LawrenceWoodman/related_posts-jekyll_plugin

require 'jekyll/post'

module RelatedPostsM

  def _reject
    _reject = ['in','a','the','then','how','to','and','or','it','understand','understanding','from','into']
  end

  # Used to remove #related_posts so that it can be overridden
  def self.included(klass)
    klass.class_eval do
      remove_method :related_posts
    end
  end

  # Calculate related posts.
  #
  # Returns [<Post>]
  def related_posts(posts)
    
    return [] unless posts.size > 1
    highest_freq = Jekyll::Post.tag_freq(posts).values.max
    related_scores = Hash.new(0)

    _current_posts_tags = self.tags

    if self.title != nil
      _current_posts_tags = _current_posts_tags + self.title.gsub(/[^a-zA-Z0-9\- ]*/, "").split()
    end

    posts.each do |post|

        if  post == self || post.data['lang'] != nil
          next
        end


        _tags = post.tags
        _title = []

        if( post.title != nil && post.title.length>0 )
          _title = post.title.gsub(/[^a-zA-Z0-9\- ]*/, "").split()
          _tags = _tags + _title #include title tags as well
        end


      _tags.each do |tag|
        
        tag = tag.downcase
        if _current_posts_tags.include?(tag)  && _reject.include?(tag) == false
          cat_freq = Jekyll::Post.tag_freq(posts)[tag]
          related_scores[post] += (1+highest_freq-cat_freq)
        end

      end
    end

    Jekyll::Post.sort_related_posts(related_scores)
  end

  module ClassMethods
    # Calculate the frequency of each tag.
    #
    # Returns {tag => freq, tag => freq, ...}
    def tag_freq(posts)
      
      return @tag_freq if @tag_freq
      @tag_freq = Hash.new(0)

      posts.each do |post|

        if post.data['lang'] != nil
          next
        end

        _tags = post.tags

        if( post.title != nil && post.title.length>0 )

          _title = post.title.gsub(/[^a-zA-Z0-9 ]*/, "").split()
          _tags = _tags + _title
        end

        _tags.each {|tag| @tag_freq[tag.downcase] += 1}
      end
      @tag_freq
    end

    # Sort the related posts in order of their score and date
    # and return just the posts
    def sort_related_posts(related_scores)
      related_scores.sort do |a,b|
        if a[1] < b[1]
          1
        elsif a[1] > b[1]
          -1
        else
          b[0].date <=> a[0].date
        end
      end.collect {|post,freq| post}
    end
  end

end

module Jekyll
  class Post
    include RelatedPostsM
    extend RelatedPostsM::ClassMethods
  end
end