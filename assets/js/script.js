	// Set the number of snowflakes (more than 30 - 40 not recommended)
	var snowmax=50
	// Set the colors for the snow. Add as many colors as you like
	var snowcolor=new Array("#aaaacc","#ddddff","#ccccdd","#f3f3f3","#f0ffff","#bbf7f9")
	// Set the fonts, that create the snowflakes. Add as many fonts as you like
	var snowtype=new Array("Times","Arial","Times","Verdana")
	// Check the value of wp_xmas_add_snow_color
	var snowcolorOrImage = wpXmas_vars.add_snow_color;
	// console.log(snowcolorOrImage);
	if (snowcolorOrImage == 'yes') {
		var snowletter = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.7068 0.514049L16.5783 1.54215L15.5502 0.385527C15.4217 0.128498 15.0361 0.128498 14.7791 0.385527C14.5221 0.514041 14.5221 0.899591 14.6506 1.15662L16.4498 3.21285L16.3213 3.98391L15.5502 3.34133C15.2932 3.21282 15.0362 3.21283 14.9077 3.46986C14.6506 3.72689 14.7791 3.98391 14.9077 4.11243L16.1928 5.14056L16.0642 6.04014L14.1365 4.49799C13.751 4.24096 13.3655 4.24096 13.1084 4.36947V4.49799C12.5944 4.75502 12.7229 5.39758 13.1084 5.65461L15.9358 7.96785L15.8072 8.99599L15.0361 8.35342C14.9076 8.2249 14.5221 8.2249 14.3936 8.35342V8.4819C14.2651 8.61041 14.265 8.86744 14.5221 9.12447L15.6787 10.1526V11.0522L15.4217 10.9237C15.1646 10.6667 14.9076 10.7952 14.6506 10.9237C14.5221 11.1807 14.5221 11.4378 14.7791 11.5663L15.5502 12.2088L15.4217 14.008L14.2651 12.5944L14.5221 11.6948C14.5221 11.4377 14.3936 11.1807 14.1365 11.1807C13.8795 11.0522 13.6225 11.1807 13.494 11.4377V11.6948L12.8514 10.9237L13.2369 9.38151C13.3654 9.12448 13.237 8.86746 12.98 8.86746C12.7229 8.73895 12.4659 8.86744 12.3374 9.12447L12.0803 10.0241L11.5663 9.38151L12.5943 5.78313C12.7229 5.39759 12.3374 4.88351 11.8233 4.755C11.4378 4.755 11.1808 5.01203 11.0522 5.39757L10.2811 7.83933L9.63854 7.06827L10.1526 5.52609C10.1526 5.39758 10.0241 5.14056 9.76711 5.01204C9.51008 4.88353 9.25302 5.01202 9.25302 5.26905L8.99598 6.16866L8.48197 5.65461L8.73893 2.95581C8.73893 2.69878 8.48195 2.44176 8.22492 2.44176C7.88222 2.44176 7.71084 2.57026 7.71084 2.82729L7.58235 4.36947L6.81122 3.59838C6.55419 3.21284 6.04019 3.21283 5.65464 3.46986C5.39762 3.72689 5.26906 4.24093 5.52608 4.62648L6.16865 5.52609L4.75503 5.26905C4.36949 5.26905 4.24098 5.39758 4.11246 5.65461C4.11246 6.04015 4.36952 6.4257 4.62655 6.4257L7.19683 6.68271L7.71084 7.19676L6.81122 7.32528C6.55419 7.32528 6.4257 7.5823 6.4257 7.83933C6.4257 8.09636 6.68276 8.22489 6.93978 8.22489L8.48197 8.09637L9.12454 8.86746L6.55426 9.12447C6.16872 9.12447 5.91164 9.3815 5.78313 9.76704C5.78313 10.2811 6.16868 10.6667 6.68274 10.6667L10.2811 10.2811L10.9237 11.0522L10.0241 11.1807C9.76704 11.1807 9.51006 11.4377 9.51006 11.6948H9.63854C9.63854 11.9518 9.8956 12.0803 10.1526 12.0803L11.6948 11.9518L12.3374 12.7229H12.0803C11.8233 12.7229 11.5663 12.9799 11.5663 13.2369C11.6948 13.494 11.8233 13.751 12.0803 13.6225H12.98L14.1365 15.0361L12.3374 14.7791L11.9518 14.008C11.8233 13.751 11.5662 13.6225 11.3092 13.751C11.0522 13.8795 11.0522 14.1365 11.0522 14.3936L11.3092 14.7791L10.2811 14.6506L9.51006 13.2369C9.38155 12.9799 9.12452 12.8514 8.86749 12.9799C8.61046 13.1084 8.61042 13.3654 8.73893 13.6225L9.12454 14.5221L8.22492 14.3936L6.4257 11.1807C6.16867 10.6666 5.65466 10.5382 5.26912 10.9237C4.88358 11.1807 4.88356 11.5663 5.01207 11.9518L6.29721 14.265L5.26912 14.1365L4.49799 12.7229C4.49799 12.4659 4.11249 12.3373 3.98398 12.4658H3.85542C3.7269 12.5944 3.59842 12.9799 3.72694 13.1084L4.11246 14.008H3.34141L1.67067 11.8233C1.54215 11.6948 1.15664 11.5662 0.899613 11.8233C0.642585 11.9518 0.642617 12.3373 0.771131 12.5944L1.79923 13.751H0.64257C0.257028 13.6225 0 13.8795 0 14.265C0 14.7791 0.128545 15.2932 0.514087 15.2932L1.67067 15.4217L0.514087 16.3213C0.257059 16.4498 0.128498 16.8353 0.385526 17.0924V16.9638C0.642554 17.2209 0.899629 17.3494 1.15666 17.2209L3.21285 15.5502L3.98398 15.6787L3.46989 16.3213C3.21286 16.4498 3.34138 16.7068 3.46989 16.9638V16.8353C3.72692 17.0923 3.98395 17.0924 4.11246 16.9638L5.14056 15.8072H6.04017L4.49799 17.7349C4.24096 17.992 4.24096 18.3775 4.49799 18.763C4.75502 19.1486 5.39762 19.1486 5.65464 18.763L8.09636 16.0643H8.99598L8.35341 16.8353C8.22489 16.9638 8.22494 17.2209 8.48197 17.3494C8.61048 17.4779 8.99602 17.6064 9.12454 17.3494L10.1526 16.1927L11.0522 16.3213L10.9237 16.4498C10.7952 16.7068 10.7952 16.9638 11.0522 17.0924C11.1808 17.2209 11.4378 17.2209 11.6948 17.0924L12.2088 16.4498L14.008 16.5783L12.5943 17.6064L11.8233 17.3494C11.5663 17.2209 11.3092 17.3494 11.1807 17.6064C11.1807 17.8634 11.3092 18.1205 11.5663 18.249H11.8233L11.0522 18.8915L9.51006 18.3775C9.25303 18.3775 8.99601 18.506 8.86749 18.763C8.86749 19.0201 8.99599 19.2771 9.25302 19.2771L10.1526 19.6626L9.3815 20.1767L5.91169 19.1486C5.39763 19.0201 4.88351 19.4056 4.88351 19.9197C4.755 20.3052 5.01206 20.5622 5.3976 20.6907L7.8394 21.4618L7.19683 22.1044L5.65464 21.5904C5.39762 21.4618 5.14059 21.7188 5.01207 21.9759C5.01207 22.2329 5.14057 22.49 5.3976 22.49L6.29721 22.8755L5.65464 23.5181L2.9558 23.261C2.69878 23.1325 2.4418 23.261 2.4418 23.5181C2.4418 23.9036 2.57026 24.2892 2.9558 24.2892L4.36951 24.4177L3.59837 25.0602C3.21283 25.3173 3.21286 25.8313 3.46989 26.0883C3.72692 26.3454 4.24101 26.4739 4.62655 26.2169L5.52608 25.4458L5.3976 26.988C5.26909 27.3735 5.39759 27.759 5.78313 27.759C6.04015 27.8875 6.4257 27.3735 6.4257 27.1164L6.68274 24.4177L7.32531 23.9036V24.9317C7.32531 25.1888 7.58237 25.3173 7.8394 25.3173C8.09642 25.3173 8.35344 25.0602 8.22492 24.8032L8.09636 23.261L8.86749 22.6184L9.12454 25.1887C9.12454 25.5743 9.38156 25.8313 9.76711 25.9598H9.89559C10.2811 25.9598 10.7952 25.5743 10.6666 25.0602L10.4097 21.3333L11.0522 20.8193L11.1807 21.7189C11.1807 21.9759 11.4378 22.2329 11.6948 22.1044C11.9518 22.1044 12.2089 21.8474 12.0803 21.5904L11.9518 20.0482L12.7229 19.4056V19.6626C12.8514 19.9197 12.9799 20.1767 13.2369 20.0482C13.4939 20.0482 13.751 19.7911 13.751 19.5341L13.6225 18.763L15.0361 17.6064L14.9077 19.2771L14.008 19.7912C13.751 19.9197 13.6225 20.1767 13.751 20.4337C13.8795 20.6908 14.2651 20.6908 14.3936 20.5623L14.7791 20.4337L14.6506 21.4618L13.2369 22.2329C12.9799 22.3614 12.8514 22.6185 12.98 22.8755C13.1085 23.1325 13.494 23.1325 13.6225 23.004L14.5221 22.6184L14.3936 23.5181L11.1807 25.3173C10.7952 25.5743 10.6667 26.0883 10.9237 26.4739C11.1807 26.8594 11.5662 26.8594 11.9518 26.7309L14.2651 25.4458L14.1365 26.4739L12.7229 27.1164C12.4659 27.245 12.4659 27.6305 12.4659 27.759C12.5944 28.016 12.9799 28.1446 13.2369 28.0161L14.008 27.502V28.4016L11.9518 30.0723C11.6948 30.2008 11.5663 30.5864 11.8233 30.8434C11.9518 31.1004 12.3373 31.1004 12.5943 30.9719L13.8795 29.9438L13.751 30.9719C13.6225 31.4859 13.8796 31.8715 14.2651 32H14.3936C14.7791 32 15.2932 31.6144 15.2932 31.2289L15.4217 30.0723L16.3213 31.2289C16.4498 31.4859 16.8353 31.4859 17.0923 31.3574C17.3494 31.1004 17.3494 30.8434 17.2209 30.5863L15.5502 28.5301L15.6787 27.759L16.3213 28.2731C16.5783 28.5301 16.8353 28.4016 16.9639 28.2731C17.0924 28.0161 17.0924 27.759 16.9639 27.6305L15.8072 26.6024V25.5743L17.7349 27.245C18.1204 27.502 18.5061 27.502 18.7631 27.245C19.1486 26.9879 19.1486 26.3454 18.7631 25.9598L16.0642 23.6466L16.1928 22.747L16.8354 23.3895C16.9639 23.5181 17.2209 23.518 17.4779 23.261H17.3494C17.6064 23.004 17.6064 22.747 17.3494 22.6184L16.1928 21.5904L16.3213 20.5623L16.4498 20.8193C16.7068 20.9478 16.9638 20.9478 17.0923 20.6907C17.2209 20.5622 17.3494 20.3052 17.0923 20.0482L16.4498 19.5341L16.5783 17.7349L17.6064 19.1486L17.3494 19.9197C17.2209 20.1767 17.3494 20.4337 17.6064 20.5623C17.8635 20.5623 18.1205 20.4337 18.249 20.1767V19.9197L18.8916 20.6907L18.506 22.2329C18.3775 22.4899 18.5061 22.747 18.7631 22.8755C19.0201 22.8755 19.2771 22.747 19.4057 22.49L19.6626 21.5904L20.3052 22.3614L19.1486 25.8313C19.0201 26.3454 19.4056 26.8594 19.9197 26.8594C20.3052 26.988 20.6908 26.7309 20.6908 26.3454L21.4618 23.9036L22.1044 24.5462L21.5903 26.0883C21.5903 26.3454 21.7189 26.6024 21.9759 26.7309C22.233 26.7309 22.4899 26.6024 22.4899 26.3454L22.8755 25.4458L23.518 26.0883L23.2611 28.7871C23.1326 29.0442 23.261 29.4297 23.518 29.5582H23.6466C23.9036 29.5582 24.2892 29.1727 24.2892 28.7871L24.4176 27.3735L25.0602 28.1446C25.3172 28.5301 25.8313 28.5301 26.0883 28.2731C26.4739 28.0161 26.4739 27.6305 26.2169 27.245L25.5743 26.4739L26.9879 26.6024C27.3735 26.6024 27.7591 26.3454 27.7591 25.9598C27.8876 25.7028 27.502 25.5743 27.1165 25.5743L24.5462 25.3173L24.0321 24.5462L24.9317 24.4177C25.1888 24.4177 25.4458 24.1606 25.3173 23.9036C25.3173 23.6466 25.0602 23.3895 24.8032 23.5181L23.2611 23.6466L22.6185 22.8755L25.1888 22.6184C25.5743 22.6184 25.9598 22.2329 25.9598 21.8474C25.9598 21.3333 25.5743 20.9478 25.0602 21.0763L21.4618 21.3333L20.8193 20.6907L21.7189 20.5623C21.9759 20.5623 22.2329 20.3052 22.2329 20.0482C22.2329 19.7911 21.9759 19.5341 21.7189 19.6626L20.0482 19.7912L19.4057 19.0201H19.7912C20.0482 18.8916 20.1767 18.763 20.1767 18.506V18.3775C20.1767 18.1205 19.9196 17.992 19.6626 17.992L18.7631 18.249L17.6064 16.9638L19.4057 17.0924L19.7912 17.8635C19.9197 18.1205 20.1767 18.1205 20.4337 17.992C20.6908 17.8206 20.7765 17.6492 20.6908 17.4779L20.4337 17.2209L21.4618 17.3494L22.2329 18.6345C22.3614 18.8916 22.6184 18.8915 22.8755 18.763C23.1325 18.5917 23.2182 18.4203 23.1325 18.249L22.6185 17.4779H23.518L25.3173 20.6907C25.5743 21.0763 26.0884 21.2048 26.4739 20.8193H26.6024C26.8594 20.5622 26.8594 20.3052 26.7309 19.9197L25.4457 17.7349L26.4739 17.8635L27.245 19.1486C27.3735 19.2771 27.6305 19.4056 27.8875 19.2771C28.0589 19.1058 28.1017 18.8916 28.016 18.6345L27.6305 17.8635L28.4016 17.992L30.0723 19.9197C30.2008 20.1767 30.5863 20.1767 30.8433 19.9197C31.1004 19.7912 31.1004 19.4056 30.9719 19.2771L29.9437 18.1205L31.1004 18.249C31.4859 18.249 32 17.8635 32 17.3494C32 16.9639 31.6144 16.7068 31.2289 16.7068L30.0723 16.5783L31.3574 15.5502C31.4859 15.2931 31.6145 14.9076 31.3574 14.7791V14.6506C31.2289 14.5221 30.8433 14.5221 30.5863 14.6506L28.5301 16.4498L27.7591 16.3213L28.4016 15.5502C28.5301 15.2931 28.5301 15.0361 28.2731 14.7791C28.016 14.6506 27.759 14.7791 27.6305 14.9076L26.6024 16.1927L25.7028 16.0643L27.245 14.008C27.502 13.751 27.502 13.3654 27.245 12.9799C26.9879 12.5943 26.3453 12.5943 26.0883 12.9799L23.7751 15.9357L22.747 15.8072L23.3896 15.0361C23.5181 14.9076 23.5181 14.5221 23.2611 14.3936C23.1326 14.1365 22.747 14.265 22.6185 14.3936L21.5903 15.6787H20.6908L20.8193 15.2932C20.9478 15.1647 20.9478 14.7791 20.8193 14.6506C20.5622 14.5221 20.3052 14.5221 20.0482 14.7791L19.5341 15.5502L17.7349 15.2932L19.1486 14.265L19.9197 14.3936C20.1767 14.5221 20.4337 14.3936 20.5622 14.1365C20.6907 13.8795 20.5622 13.6225 20.3052 13.494H20.0482L20.8193 12.8514L22.2329 13.2369C22.4899 13.3654 22.747 13.2369 22.8755 12.9799C23.004 12.7229 22.8755 12.4658 22.6185 12.3373L21.5903 12.0803L22.3615 11.4377L25.9598 12.4658C26.3454 12.7229 26.8594 12.3373 26.9879 11.8233C26.9879 11.4377 26.7309 11.0522 26.3454 10.9237L23.9036 10.2811L24.6747 9.63856L26.0883 10.0241C26.3453 10.1526 26.6024 10.0241 26.7309 9.76704C26.8594 9.51001 26.6024 9.25298 26.4739 9.12447L25.4457 8.99599L26.0883 8.4819L28.7872 8.73894C29.0442 8.73894 29.5582 8.48191 29.5582 8.09637C29.5582 7.83934 29.1727 7.71085 28.7872 7.71085L27.3735 7.4538L28.1446 6.81123C28.5301 6.42569 28.5301 6.04015 28.2731 5.65461C28.016 5.26907 27.6305 5.26906 27.245 5.52609L26.4739 6.16866L26.6024 4.755C26.6024 4.36946 26.3453 4.24094 26.0883 4.11243H25.9598C25.7028 4.11243 25.5743 4.24093 25.5743 4.62648L25.3173 7.19676L24.5462 7.71085L24.4176 6.81123C24.4176 6.5542 24.1607 6.29718 23.9036 6.29718C23.6466 6.4257 23.518 6.55421 23.518 6.93975L23.6466 8.4819L22.8755 9.12447L22.6185 6.4257C22.6185 6.16868 22.3615 5.78313 21.9759 5.78313C21.4619 5.65462 20.9478 6.16865 21.0763 6.68271L21.4618 10.2811L20.6908 10.9237L20.5622 9.89556C20.5622 9.63853 20.3052 9.51003 20.0482 9.51003C19.7912 9.51003 19.6626 9.76705 19.6626 10.0241L19.7912 11.5663L19.02 12.2088V11.9518C19.02 11.6948 18.7631 11.5663 18.506 11.5663C18.249 11.5663 17.992 11.8233 18.1205 12.0803L18.249 12.9799L16.9639 14.1365L17.0923 12.3373L17.8635 11.9518C18.1205 11.8233 18.1205 11.5663 17.992 11.3092C17.8634 11.0522 17.735 10.9237 17.4779 11.0522L17.2209 11.1807L17.3494 10.2811L18.6345 9.51003C18.8915 9.38152 18.8916 9.12449 18.7631 8.86746C18.6346 8.61044 18.506 8.48191 18.249 8.61042L17.4779 9.12447V8.22489L20.6908 6.4257C21.2048 6.16868 21.2048 5.52611 20.9478 5.14056H20.8193C20.5622 4.88354 20.3052 4.75501 19.9197 5.01204L17.7349 6.29718L17.8635 5.26905L19.1486 4.49799C19.4056 4.36948 19.4056 4.11245 19.2771 3.85542C19.1486 3.59839 18.8916 3.59839 18.7631 3.7269L17.8635 4.11243L17.992 3.34133L19.9197 1.67067C20.1767 1.41364 20.1767 1.1566 20.0482 0.899575C19.7912 0.642547 19.5341 0.642539 19.2771 0.771053L18.1205 1.79919L18.249 0.64257C18.249 0.257028 17.8635 0 17.4779 0H17.3494C16.9638 0 16.7068 0.128506 16.7068 0.514049Z" />
		</svg>`;	
	} else {
		var snowletter = "<img src='" + wpXmas_vars.plugin_url + "/assets/img/snowflake.png'/>";
	}
	var sinkspeed=0.6
	// Set the maximum-size of your snowflakes
	var snowmaxsize=30
	// Set the minimal-size of your snowflakes
	var snowminsize=8
	// Set the snowing-zone
	// Set 1 for all-over-snowing, set 2 for left-side-snowing
	// Set 3 for center-snowing, set 4 for right-side-snowing
	var snowingzone=1
	/*-----------------------------------------------------------*/
	var snow=new Array()
	var marginbottom
	var marginright
	var timer
	var i_snow=0
	var x_mv=new Array();
	var crds=new Array();
	var lftrght=new Array();
	var browserinfos=navigator.userAgent
	var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/)
	var ns6=document.getElementById&&!document.all
	var opera=browserinfos.match(/Opera/)
	var browserok=ie5||ns6||opera

	function randommaker(range) {
	        rand=Math.floor(range*Math.random())
	    return rand
	}

	function initsnow() {
	        if (ie5 || opera) {
	                marginbottom = document.body.scrollHeight
	                marginright = document.body.clientWidth-15
	        }
	        else if (ns6) {
	                marginbottom = document.body.scrollHeight
	                marginright = window.innerWidth-15
	        }
	        var snowsizerange=snowmaxsize-snowminsize
	        for (i=0;i<=snowmax;i++) {
	                crds[i] = 0;
	            lftrght[i] = Math.random()*15;
	            x_mv[i] = 0.03 + Math.random()/10;
	                snow[i]=document.getElementById("s"+i)
	                snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)]
	                snow[i].size=randommaker(snowsizerange)+snowminsize
	                snow[i].style.fontSize=snow[i].size+'px';
	                snow[i].style.color=snowcolor[randommaker(snowcolor.length)]
	                snow[i].style.zIndex=1000
	                snow[i].sink=sinkspeed*snow[i].size/5
	                if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
	                if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
	                if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
	                if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
	                snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size)
	                snow[i].style.left=snow[i].posx+'px';
	                snow[i].style.top=snow[i].posy+'px';
	        }
	        movesnow()
	}

	function movesnow() {
	        for (i=0;i<=snowmax;i++) {
	                crds[i] += x_mv[i];
	                snow[i].posy+=snow[i].sink
	                snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i])+'px';
	                snow[i].style.top=snow[i].posy+'px';

	                if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])){
	                        if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
	                        if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
	                        if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
	                        if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
	                        snow[i].posy=0
	                }
	        }
	        var timer=setTimeout("movesnow()",50)
	}

	for (i=0;i<=snowmax;i++) {
	        document.write("<span id='s"+i+"' style='top:-"+snowmaxsize+"' class='snow_img'>"+snowletter+"</span>")
	}
	if (browserok) {
	        window.onload=initsnow
	}
