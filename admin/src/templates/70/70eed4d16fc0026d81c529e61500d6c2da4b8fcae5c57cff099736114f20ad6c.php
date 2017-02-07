<?php

/* destinations.html */
class __TwigTemplate_e6f87b5a8634fb8ad621f32de675dfb9d785d6cb4b4974986f897c6eb85992a3 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html>
<head>
\t<title></title>
    <link rel=\"stylesheet\" type=\"text/css\" href=\"../../game/lib/css/bootstrap/stylesheets/styles.css\">
</head>
<body>
    <h1>Liste des destinations possibles</h1>
    <form action=\"";
        // line 9
        echo twig_escape_filter($this->env, $this->env->getExtension('Slim\Views\TwigExtension')->pathFor("addDestination"), "html", null, true);
        echo "\">
        <button>Ajouter une destination</button>
    </form>
    <div>
    ";
        // line 13
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["destinations"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["dest"]) {
            // line 14
            echo "        <p>
            <a href=\"";
            // line 15
            echo twig_escape_filter($this->env, ($context["base_url"] ?? null), "html", null, true);
            echo "/destinations/";
            echo twig_escape_filter($this->env, $this->getAttribute($context["dest"], "id", array()), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, $this->getAttribute($context["dest"], "name", array()), "html", null, true);
            echo "</a>
            <a href=\"";
            // line 16
            echo twig_escape_filter($this->env, ($context["base_url"] ?? null), "html", null, true);
            echo "/destinations/delete/";
            echo twig_escape_filter($this->env, $this->getAttribute($context["dest"], "id", array()), "html", null, true);
            echo "\">Supprimer</a>
        </p>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['dest'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 19
        echo "    </div>
</body>
</html>
";
    }

    public function getTemplateName()
    {
        return "destinations.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  62 => 19,  51 => 16,  43 => 15,  40 => 14,  36 => 13,  29 => 9,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<!DOCTYPE html>
<html>
<head>
\t<title></title>
    <link rel=\"stylesheet\" type=\"text/css\" href=\"../../game/lib/css/bootstrap/stylesheets/styles.css\">
</head>
<body>
    <h1>Liste des destinations possibles</h1>
    <form action=\"{{path_for('addDestination')}}\">
        <button>Ajouter une destination</button>
    </form>
    <div>
    {% for dest in destinations %}
        <p>
            <a href=\"{{base_url}}/destinations/{{dest.id}}\">{{dest.name}}</a>
            <a href=\"{{base_url}}/destinations/delete/{{dest.id}}\">Supprimer</a>
        </p>
    {% endfor %}
    </div>
</body>
</html>
", "destinations.html", "/var/www/html/LP/FindYourWay/admin/src/templates/destinations.html");
    }
}
