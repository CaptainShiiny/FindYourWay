<?php

/* form_add_destinations.html */
class __TwigTemplate_dc3d0f47e592dc9eb13e214b6b1df45936a14ceba82f441a119035a6f475624b extends Twig_Template
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
\t<title>Ajouter une destination</title>
</head>
<body>
    <form method=\"POST\" action=\"";
        // line 7
        echo twig_escape_filter($this->env, ($context["base_url"] ?? null), "html", null, true);
        echo "/destinations\">
        <p><label for=\"label\">Label</label><input id=\"label\" name=\"label\" type=\"text\"/></p>
        <p><label for=\"latitude\">Latitude</label><input id=\"latitude\" name=\"latitude\" type=\"text\" required/></p>
        <p><label for=\"longitude\">Longitude</label><input id=\"longitude\" name=\"longitude\" type=\"text\" required/></p>
        <p><label for=\"nom\">Nom</label><input id=\"nom\" name=\"name\" type=\"text\" required/></p>
        <p><input type=\"submit\" name=\"addDestination\" value=\"Ajouter\"/></p>
    </form>
</body>
</html>
";
    }

    public function getTemplateName()
    {
        return "form_add_destinations.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  27 => 7,  19 => 1,);
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
\t<title>Ajouter une destination</title>
</head>
<body>
    <form method=\"POST\" action=\"{{base_url}}/destinations\">
        <p><label for=\"label\">Label</label><input id=\"label\" name=\"label\" type=\"text\"/></p>
        <p><label for=\"latitude\">Latitude</label><input id=\"latitude\" name=\"latitude\" type=\"text\" required/></p>
        <p><label for=\"longitude\">Longitude</label><input id=\"longitude\" name=\"longitude\" type=\"text\" required/></p>
        <p><label for=\"nom\">Nom</label><input id=\"nom\" name=\"name\" type=\"text\" required/></p>
        <p><input type=\"submit\" name=\"addDestination\" value=\"Ajouter\"/></p>
    </form>
</body>
</html>
", "form_add_destinations.html", "/var/www/html/LP/FindYourWay/admin/src/templates/form_add_destinations.html");
    }
}
