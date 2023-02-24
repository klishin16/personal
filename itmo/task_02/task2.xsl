<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="xml" encoding="UTF-8" />
	<xsl:template match="/root">
		<root>
			<xsl:apply-templates select="графика" />
		</root>
	</xsl:template>

	<xsl:template match="графика">
		<svg xmlns="http://www.w3.org/2000/svg" style="width:{@ширина}px; height:{@высота}px;">
			<ellipse id="graphic_1" fill="rgba(255,0,0,0.5)" stroke="white" stroke-width="5" cx="206" cy="139" rx="100" ry="100"/>
			<ellipse id="graphic_2" fill="rgba(0,0,255,0.5)" stroke="white" stroke-width="5" cx="108" cy="111" rx="100" ry="100"/>
			<ellipse id="graphic_3" fill="rgba(0,255,0,0.5)" stroke="white" stroke-width="5" cx="134" cy="215" rx="100" ry="100"/>
		</svg>
	</xsl:template>

	<xsl:template match="эллипс">
		<ellipse style="id:{translate(@id)}fill:{@заливка}px; stroke:{@ободок}px; stroke-width:{@ширина-ободка}px; cx={cx}; cy={cy}; rx={rx}; ry={ry}" />
	</xsl:template>
</xsl:stylesheet>