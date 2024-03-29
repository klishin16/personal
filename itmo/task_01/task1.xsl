<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html><head><title>Task 1</title></head>
    <body>
    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <xsl:apply-templates select = "строка" />
    </math>
    
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    
    </body></html>
  </xsl:template>

  <xsl:template match="строка">
    <mrow>
      <xsl:apply-templates select = "операнд | оператор | корень | дробь | число | низверх | строка | верх | низ" />
    </mrow>
  </xsl:template>

  <xsl:template match="дробь">
    <mfrac>
      <xsl:apply-templates select = "строка" />
    </mfrac>
  </xsl:template>

  <xsl:template match="операнд">
    <mi>
      <xsl:value-of select="." />
    </mi>
  </xsl:template>

  <xsl:template match="оператор">
    <mo>
      <xsl:value-of select="." />
    </mo>
  </xsl:template>

  <xsl:template match="корень">
    <msqrt>
      <xsl:apply-templates select = "строка" />
    </msqrt>
  </xsl:template>

  <xsl:template match="число">
    <mn>
      <xsl:value-of select="." />
    </mn>
  </xsl:template>

  <xsl:template match="низверх">
    <munderover>
      <xsl:apply-templates select = "строка" />
    </munderover>
  </xsl:template>

  <xsl:template match="верх">
    <msup>
      <xsl:apply-templates select = "строка" />
    </msup>
  </xsl:template>

  <xsl:template match="низ">
    <msub>
      <xsl:apply-templates select = "строка" />
    </msub>
  </xsl:template>
</xsl:stylesheet>
