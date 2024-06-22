
for image in ui-ux/*jpg
do
	if [ -s $image ] ; then # non-zero file size

		echo "*** Otimizing $image - File size: $(( $(wc -c < "$image") / 1000 ))";

		convert $image -sampling-factor 4:4:4 -strip -quality 80 -interlace JPEG -colorspace sRGB $image;

		echo "*** File size optimized: $(( $(wc -c < "$image") / 1000 ))";
		echo "*** Updating image's meta data";

		jhead -cl "Chavoshian.com - Tazhib Traditional Artworks" $image;
		exiftool -XMP-dc:Creator="Shiva Chavoshian (Chavoshian.com)" $image;
		exiftool -overwrite_original -rights="©2022 Shiva Chavoshian, all rights reserved." -CopyrightNotice="©2022 Shiva Chavoshian, all rights reserved." $image;
		rm "${image}_original";

		echo -e "=================================================\n";

 	fi
done




# More: https://developers.google.com/speed/docs/insights/OptimizeImages
# Mpre: https://stackoverflow.com/questions/53777917/download-optimized-images-from-pagespeed-insights
# convert INPUT.jpg -sampling-factor 4:2:0 -strip [-resize WxH] [-quality N] [-interlace JPEG] [-colorspace Gray/sRGB] OUTPUT.jpg


# DIMENSION=$(identify -format '%wx%h' "$image");
# width=$(identify -format %w $image)
# convert -background '#0008' -fill white -gravity center \
# -size ${width}x30 caption:my_caption \
# $image +swap -gravity south -composite new-$image
