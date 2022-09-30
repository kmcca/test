---
"ft:title" : "Supported Java Cleansing Functions"
"ft:prettyUrl" : "Supported_Java_Cleansing_Functions"
---

|Function|Flaw Class|
|--------|----------|
|`android.net.Uri.encode`|CWE-80, 93, 113, and 117|
|`<c:out> (org.apache.taglibs.standard.tag.rt.core.OutTag)`|CWE-80|
|`com.google.gwt.safehtml.shared.SafeHtmlUtils.htmlEscape`|CWE-80|
|`com.google.gwt.safehtml.shared.SafeHtmlUtils.htmlEscapeAllowEntities`|CWE-80|
|`com.google.gwt.safehtml.shared.SafeHtmlUtils.fromString`|CWE-80|
|`com.liferay.portal.kernel.util.HtmlUtil.escapeAttribute`|CWE-80|
|`com.liferay.portal.kernel.util.HtmlUtil.escape`|CWE-80|
|`com.liferay.portal.kernel.util.HtmlUtil.escapeHREF`|CWE-80|
|`com.liferay.portal.kernel.util.HtmlUtil.escapeCSS`|CWE-80, 93, 113, and 117|
|`com.liferay.portal.kernel.util.HtmlUtil.escapeREF`|CWE-80, 93, 113, and 117|
|`com.liferay.portal.kernel.util.HtmlUtil.escapeJS`|CWE-80, 93, 113, and 117|
|`com.liferay.portal.kernel.util.HtmlUtil.escapeURL`|CWE-80|
|`com.liferay.portal.kernel.util.HtmlUtil.escapeXPath`|CWE-80, 93, 113, and 117|
|`com.liferay.portal.kernel.util.HtmlUtil.escapeXPathAttribute`|CWE-80, 93, 113, and 117|
|`com.oreilly.servlet.Base64encoder.Encode`|CWE-80, 93, 113, and 117|
|`java.net.URLEncoder.encode`|CWE-80, 93, 113, and 117|
|`org.tuckey.web.filters.validation.utils.StringEscapeUtils.escapeHtml`|CWE-80|
|`org.apache.axis.components.encoding.XMLEncoder.encode`|CWE-80|
|`org.apache.commons.codec.net.URLCodec.encode`|CWE-80, 93, 113, and 117|
|`org.apache.commons.lang.StringEscapeUtils.escapeJava`|CWE-93, 113, and 117|
|`org.apache.commons.lang3.StringEscapeUtils.escapeJava`|CWE-93, 113, and 117|
|`org.apache.commons.lang.StringEscapeUtils.escapeJavaScript`|CWE-93, 113, and 117|
|`org.apache.commons.text.StringEscapeUtils.escapeEcmaScript`|CWE-93, 113, and 117|
|`org.apache.commons.text.StringEscapeUtils.escapeJava`|CWE-93, 113, and 117|
|`org.apache.commons.text.StringEscapeUtils.escapeJson`|CWE-93, 113, and 117|
|`org.apache.commons.text.StringEscapeUtils.escapeXml10`|CWE-80|
|`org.apache.commons.text.StringEscapeUtils.escapeXml11`|CWE-80|
|`org.apache.commons.lang.StringUtils.deleteWhitespace`|CWE-93, 113, and 117|
|`org.apache.commons.lang3.StringUtils.deleteWhitespace`|CWE-93, 113, and 117|
|`org.apache.commons.lang.StringUtils.normalizeSpace`|CWE-93, 113, and 117|
|`org.apache.commons.lang3.StringUtils.normalizeSpace`|CWE-93, 113, and 117|
|`org.apache.xerces.impl.dv.util.Base64.encode`|CWE-80, 93, 113, and 117|
|`${fn:escapeXml()} (org.apache.taglibs.standard.functions.Functions.escapeXml)`|CWE-80|
|`org.apache.axis2.util.XMLUtils.base64encode`|CWE-80, 93, 113, and 117|
|`org.apache.xerces.impl.dv.util.Base64.encode`|CWE-80, 93, 113, and 117|
|`org.apache.xerces.impl.dv.util.HexBin.encode`|CWE-80, 93, 113, and 117|
|`org.keyczar.util.Base64Coder.encode`|CWE-80, 93, 113, and 117|
|`org.owasp.encoder.Encode.forCDATA`|CWE-80|
|`org.owasp.encoder.Encode.forCssString`|CWE-80, 93, 113, and 117|
|`org.owasp.encoder.Encode.forCssUrl`|CWE-80, 93, 113, and 117|
|`org.owasp.encoder.Encode.forHtml`|CWE-80|
|`org.owasp.encoder.Encode.forHtmlAttribute`|CWE-80|
|`org.owasp.encoder.Encode.forHtmlContent`|CWE-80|
|`org.owasp.encoder.Encode.forHtmlUnquotedAttribute`|CWE-80, 93, 113, and 117|
|`org.owasp.encoder.Encode.forJava`|CWE-93, 113, and 117|
|`org.owasp.encoder.Encode.forJavaScript`|CWE-80, 93, 113, and 117|
|`org.owasp.encoder.Encode.forJavaScriptAttribute`|CWE-80, 93, 113, and 117|
|`org.owasp.encoder.Encode.forJavaScriptBlock`|CWE-80, 93, 113, and 117|
|`org.owasp.encoder.Encode.forJavaScriptSource`|CWE-80, 93, 113, and 117|
|`org.owasp.encoder.Encode.forUri`|CWE-80, 93, 113, and 117|
|`org.owasp.encoder.Encode.forUriComponent`|CWE-80, 93, 113, and 117|
|`org.owasp.encoder.Encode.forXml`|CWE-80|
|`org.owasp.encoder.Encode.forXmlAttribute`|CWE-80|
|`org.owasp.encoder.Encode.forXmlComment`|CWE-80|
|`org.owasp.encoder.Encode.forXmlContent`|CWE-80|
|`org.owasp.esapi.Encoder.encodeForBase64`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.Encoder.encodeForCSS`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.Encoder.encodeForDN`|CWE-90|
|`org.owasp.esapi.Encoder.encodeForHTML`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.Encoder.encodeForHTMLAttribute`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.Encoder.encodeForJavaScript`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.Encoder.encodeForLDAP`|CWE-90|
|`org.owasp.esapi.Encoder.encodeForURL`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.Encoder.encodeForXML`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.Encoder.encodeForXMLAttribute`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.interfaces.IEncoder.encodeForDN`|CWE-90|
|`org.owasp.esapi.interfaces.IEncoder.encodeForLDAP`|CWE-90|
|`org.owasp.esapi.StringUtilities.replaceLinearWhiteSpace`|CWE-93, 113, and 117|
|`org.owasp.esapi.StringUtilities.stripControls`|CWE-93, 113, and 117|
|`org.owasp.reform.Reform.HtmlAttributeEncode`|CWE-80, 93, 113, and 117|
|`org.owasp.reform.Reform.HtmlEncode`|CWE-80, 93, 113, and 117|
|`org.owasp.reform.Reform.JsString`|CWE-80, 93, 113, and 117|
|`org.owasp.reform.Reform.VbsString`|CWE-80, 93, 113, and 117|
|`org.owasp.reform.Reform.XmlAttributeEncode`|CWE-80, 93, 113, and 117|
|`org.owasp.reform.Reform.XmlEncode`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.interfaces.IEncoder.encodeForHTML`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.interfaces.IEncoder.encodeForHTMLAttribute`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.interfaces.IEncoder.encodeForJavascript`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.interfaces.IEncoder.encodeForXML`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.interfaces.IEncoder.encodeForXMLAttribute`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.interfaces.IEncoder.encodeForURL`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.interfaces.IEncoder.encodeForBase64`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.reference.DefaultEncoder.encodeForBase64`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.reference.DefaultEncoder.encodeForCSS`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.reference.DefaultEncoder.encodeForHTML`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.reference.DefaultEncoder.encodeForHTMLAttribute`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.reference.DefaultEncoder.encodeForJavaScript`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.reference.DefaultEncoder.encodeForURL`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.reference.DefaultEncoder.encodeForXML`|CWE-80, 93, 113, and 117|
|`org.owasp.esapi.reference.DefaultEncoder.encodeForXMLAttribute`|CWE-80, 93, 113, and 117|
|`org.w3c.tidy.servlet.util.HTMLEncode.Encode`|CWE-80|
|`org.w3c.tidy.servlet.util.HTMLEncode.EncodeHREFQuery`|CWE-80|
|`org.springframework.util.StringUtils.trimAllWhitespace`|CWE-93, 113, and 117|
|`org.springframework.web.util.HtmlUtils.htmlEscape`|CWE-80|
|`org.springframework.web.util.HtmlUtils.htmlEscapeDecimal`|CWE-80|
|`org.springframework.web.util.HtmlUtils.htmlEscapeHex`|CWE-80|
|`org.springframework.web.util.UriUtils.encode`|CWE-80, 93, 113, and 117|
|`org.springframework.web.util.UriUtils.encodeAuthority`|CWE-93, 113, and 117|
|`org.springframework.web.util.UriUtils.encodeFragment`|CWE-93, 113, and 117|
|`org.springframework.web.util.UriUtils.encodeHost`|CWE-93, 113, and 117|
|`org.springframework.web.util.UriUtils.encodePath`|CWE-93, 113, and 117|
|`org.springframework.web.util.UriUtils.encodePathSegment`|CWE-93, 113, and 117|
|`org.springframework.web.util.UriUtils.encodePort`|CWE-80, 93, 113, and 117|
|`org.springframework.web.util.UriUtils.encodeQuery`|CWE-93, 113, and 117|
|`org.springframework.web.util.UriUtils.encodeQueryParam`|CWE-93, 113, and 117|
|`org.springframework.web.util.UriUtils.encodeScheme`|CWE-80, 93, 113, and 117|
|`org.springframework.web.util.UriUtils.encodeUserInfo`|CWE-93, 113, and 117|
|`sun.misc.BASE64encoder.Encode`|CWE-80, 93, 113, and 117|
|`sun.misc.BASE64encoder.EncodeString`|CWE-80, 93, 113, and 117|
